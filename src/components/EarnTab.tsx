import { useAuth } from "@/contexts/AuthContext";
import { ExternalLink, Star, Zap } from "lucide-react";

const EarnTab = () => {
  const { user } = useAuth();

  const offerwalls = [
    {
      name: "Adlexy",
      description: "Complete surveys & offers to earn points instantly.",
      url: `https://adlexy.com/offerwall/h7mx23bis2zaib6apwwe73uv3gr92i/${user?.uid}`,
      icon: <Zap className="h-6 w-6" />,
      tag: "HOT",
    },
    {
      name: "GemiAd",
      description: "Watch videos & install apps for quick rewards.",
      url: `https://gemiad.com/offerwall/750/مصعب123/${user?.uid}`,
      icon: <Star className="h-6 w-6" />,
      tag: "NEW",
    },
  ];

  return (
    <div className="px-4 pt-6 pb-28 space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-1">Earn Points</h2>
        <p className="text-muted-foreground text-sm">Complete offers to earn rewards</p>
      </div>

      {offerwalls.map((wall) => (
        <a
          key={wall.name}
          href={wall.url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-5 flex items-center gap-4 transition-all hover:border-primary/40 hover:neon-glow active:scale-[0.98] block"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {wall.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg">{wall.name}</h3>
              <span className="rounded-md bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wider">
                {wall.tag}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">{wall.description}</p>
          </div>
          <ExternalLink className="h-5 w-5 text-muted-foreground shrink-0" />
        </a>
      ))}
    </div>
  );
};

export default EarnTab;
