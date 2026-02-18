import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Dashboard = () => {
  return (
    <Link to="/login" className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-purple">
          <ShoppingBag size={32} className="text-primary-foreground" />
        </div>
        <h1 className="mb-2 text-3xl font-bold text-foreground">Shopee Chat Manager</h1>
        <p className="text-muted-foreground">クリックしてログイン画面へ</p>
      </div>
    </Link>
  );
};

export default Dashboard;
