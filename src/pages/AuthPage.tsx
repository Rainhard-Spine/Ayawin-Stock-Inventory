
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/supabaseClient";
import { toast } from "@/components/ui/use-toast";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Always set up auth listener before checking session
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        navigate("/");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast({ title: "Error logging in", description: error.message });
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName }
        }
      });
      if (error) {
        toast({ title: "Error signing up", description: error.message });
      } else {
        toast({ title: "Signup successful", description: "Check your email to confirm your account" });
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-white to-yellow-100 px-2">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-blue-100 space-y-6">
        <h2 className="text-2xl font-bold gradient-text text-center mb-2">{isLogin ? "Log in" : "Sign up"} to Jstock Solutions</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <Input
              placeholder="Full Name"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="username"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete={isLogin ? "current-password" : "new-password"}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Log In" : "Sign Up"}
          </Button>
        </form>
        <div className="flex items-center justify-center">
          {isLogin ? (
            <>
              <span>Don't have an account?</span>
              <button
                onClick={() => setIsLogin(false)}
                className="ml-2 text-blue-700 font-semibold underline"
                type="button"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              <span>Already have an account?</span>
              <button
                onClick={() => setIsLogin(true)}
                className="ml-2 text-blue-700 font-semibold underline"
                type="button"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
