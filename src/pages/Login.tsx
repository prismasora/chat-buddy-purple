import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Eye, EyeOff, Mail, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-foreground/5 translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary-foreground/5 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-primary-foreground/20">
            <ShoppingBag size={40} className="text-primary-foreground" />
          </div>
          <h1 className="text-primary-foreground text-3xl font-bold mb-3">Shopee Chat Manager</h1>
          <p className="text-primary-foreground/80 text-base max-w-sm mx-auto leading-relaxed">
            多店舗・多国対応のチャット管理プラットフォーム
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {["🇸🇬 SG", "🇵🇭 PH", "🇲🇾 MY"].map((country) => (
              <div key={country} className="bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-3 text-primary-foreground text-sm font-medium">
                {country}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-primary-foreground/70 text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">98%</p>
              <p className="text-xs">応答率</p>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">3h</p>
              <p className="text-xs">平均応答時間</p>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">5ヶ国</p>
              <p className="text-xs">対応可能</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md animate-fade-in">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-purple">
              <ShoppingBag size={20} className="text-primary-foreground" />
            </div>
            <h1 className="text-foreground font-bold text-xl">Shopee Chat Manager</h1>
          </div>

          <div className="mb-8">
            <h2 className="text-foreground text-2xl font-bold mb-1">ログイン</h2>
            <p className="text-muted-foreground text-sm">企業アカウントでサインインしてください</p>
          </div>

          {/* Company Badge */}
          <div className="flex items-center gap-2 p-3 bg-primary-subtle rounded-lg border border-primary/20 mb-6">
            <Globe size={16} className="text-primary" />
            <span className="text-primary text-sm font-medium">企業アカウント: TechCorp Japan</span>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-foreground text-sm font-medium">
                メールアドレス
              </Label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9 border-border focus-visible:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-foreground text-sm font-medium">
                パスワード
              </Label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-9 pr-9 border-border focus-visible:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                <input type="checkbox" className="rounded border-border accent-primary" />
                ログイン状態を保持
              </label>
              <a href="#" className="text-primary hover:text-primary-dark font-medium transition-colors">
                パスワードを忘れた方
              </a>
            </div>

            <Button
              type="submit"
              className="w-full gradient-primary text-primary-foreground font-semibold py-2.5 shadow-purple hover:shadow-purple-lg transition-all hover:opacity-90"
            >
              <ShoppingBag size={16} className="mr-2" />
              ログイン
            </Button>
          </form>

          <p className="text-center text-muted-foreground text-xs mt-6">
            © 2024 Shopee Chat Manager. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
