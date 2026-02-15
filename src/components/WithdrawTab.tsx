import { useState } from "react";
import { X } from "lucide-react";

const methods = [
  { name: "PayPal", icon: "💳", minPoints: 500 },
  { name: "Binance", icon: "₿", minPoints: 1000 },
  { name: "PUBG UC", icon: "🎮", minPoints: 300 },
  { name: "Free Fire Diamonds", icon: "💎", minPoints: 200 },
];

const WithdrawTab = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelected(null);
    }, 2500);
  };

  return (
    <div className="px-4 pt-6 pb-28 space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-1">Withdraw</h2>
        <p className="text-muted-foreground text-sm">Choose your payout method</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {methods.map((m) => (
          <button
            key={m.name}
            onClick={() => setSelected(m.name)}
            className="glass-card p-5 flex flex-col items-center gap-3 transition-all hover:border-primary/40 hover:neon-glow active:scale-95 text-center"
          >
            <span className="text-3xl">{m.icon}</span>
            <span className="font-bold text-sm">{m.name}</span>
            <span className="text-muted-foreground text-xs">Min: {m.minPoints} pts</span>
          </button>
        ))}
      </div>

      {/* Withdraw Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="glass-card w-full max-w-sm p-6 relative">
            <button onClick={() => setSelected(null)} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-bold text-lg">Request Submitted!</h3>
                <p className="text-muted-foreground text-sm mt-1">We'll process your {selected} withdrawal soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-bold text-lg">Withdraw to {selected}</h3>
                <input
                  required
                  placeholder="Your account ID / email"
                  className="w-full rounded-lg bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  required
                  type="number"
                  min={1}
                  placeholder="Amount (points)"
                  className="w-full rounded-lg bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-3 font-bold text-primary-foreground transition-all hover:neon-glow active:scale-95"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawTab;
