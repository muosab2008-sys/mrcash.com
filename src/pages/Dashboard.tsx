import { useState } from "react";
import { Coins, Wallet, User } from "lucide-react";
import EarnTab from "@/components/EarnTab";
import WithdrawTab from "@/components/WithdrawTab";
import ProfileTab from "@/components/ProfileTab";

type Tab = "earn" | "withdraw" | "profile";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "earn", label: "Earn", icon: <Coins className="h-5 w-5" /> },
  { id: "withdraw", label: "Withdraw", icon: <Wallet className="h-5 w-5" /> },
  { id: "profile", label: "Profile", icon: <User className="h-5 w-5" /> },
];

const Dashboard = () => {
  const [active, setActive] = useState<Tab>("earn");

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto relative">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border px-4 py-4">
        <h1 className="text-xl font-black">
          <span className="text-primary">Mr</span>Cash
        </h1>
      </div>

      {/* Content */}
      {active === "earn" && <EarnTab />}
      {active === "withdraw" && <WithdrawTab />}
      {active === "profile" && <ProfileTab />}

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t border-border">
        <div className="max-w-lg mx-auto flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
                active === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.icon}
              <span className="text-[11px] font-semibold">{tab.label}</span>
              {active === tab.id && (
                <div className="absolute top-0 h-0.5 w-12 bg-primary rounded-full neon-glow" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
