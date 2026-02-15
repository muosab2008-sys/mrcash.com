import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { DollarSign } from "lucide-react";

const Index = () => {
  const { user, loading, loginWithGoogle } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(148_100%_50%/0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        {/* Logo */}
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary neon-glow-strong animate-float">
          <DollarSign className="h-10 w-10 text-primary-foreground" />
        </div>

        <h1 className="text-5xl font-black tracking-tight mb-3">
          <span className="text-primary neon-text">Mr</span>Cash
        </h1>

        <p className="text-muted-foreground text-lg mb-2 font-medium">
          Complete offers. Earn rewards. Cash out.
        </p>
        <p className="text-muted-foreground/60 text-sm mb-10">
          Join thousands earning daily with our premium offerwall platform.
        </p>

        <button
          onClick={loginWithGoogle}
          className="flex items-center gap-3 rounded-xl bg-foreground px-8 py-4 text-background font-bold text-lg transition-all hover:scale-105 hover:shadow-lg active:scale-95"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Index;
