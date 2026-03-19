import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getDashboardPath } from "../utils/roleUtils";

/**
 * If user is logged in, redirect to their role's dashboard.
 * Otherwise render children (e.g. LandingPage).
 */
export default function RedirectToRoleDashboard({ children }) {
  const { user } = useAuth();
  const role = user?.role ?? user?.user?.role;

  if (user && role) {
    return <Navigate to={getDashboardPath(role)} replace />;
  }

  return children;
}
