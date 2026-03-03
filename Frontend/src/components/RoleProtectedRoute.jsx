import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleProtectedRoute = ({ children, allowedRoles, redirectTo }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-8 h-8 border-4 border-cyan-900 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  const role = user.role || user.user?.role || "Company";
  const hasAccess = !allowedRoles || allowedRoles.includes(role);

  if (!hasAccess) {
    return <Navigate to={redirectTo || "/"} state={{ from: location }} replace />;
  }

  return children;
};

export default RoleProtectedRoute;
