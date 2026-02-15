import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { LogOut, Coins } from "lucide-react";

const ProfileTab = () => {
  const { user, logout } = useAuth();
  const [points, setPoints] = useState<number | null>(null);

  useEffect(() => {
    if (!user) return;
    const fetchPoints = async () => {
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        setPoints(snap.exists() ? (snap.data().points ?? 0) : 0);
      } catch {
        setPoints(0);
      }
    };
    fetchPoints();
  }, [user]);

  return (
    <div className="px-4 pt-6 pb-28 space-y-5">
      <div>
        <h2 className="text-2xl font-bold mb-1">Profile</h2>
        <p className="text-muted-foreground text-sm">Your account details</p>
      </div>

      {/* User card */}
      <div className="glass-card p-6 flex items-center gap-4">
        <img
          src={user?.photoURL || ""}
          alt="avatar"
          referrerPolicy="no-referrer"
          className="h-16 w-16 rounded-full border-2 border-primary/30 object-cover"
        />
        <div className="min-w-0">
          <h3 className="font-bold text-lg truncate">{user?.displayName}</h3>
          <p className="text-muted-foreground text-sm truncate">{user?.email}</p>
        </div>
      </div>

      {/* Points */}
      <div className="glass-card p-6 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Coins className="h-7 w-7" />
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Points Balance</p>
          <p className="text-3xl font-black text-primary neon-text">
            {points === null ? "..." : points.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={logout}
        className="glass-card w-full p-4 flex items-center justify-center gap-2 text-destructive font-semibold transition-all hover:bg-destructive/10 active:scale-95"
      >
        <LogOut className="h-5 w-5" />
        Log Out
      </button>
    </div>
  );
};

export default ProfileTab;
