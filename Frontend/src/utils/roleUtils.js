/**
 * Role-based dashboard paths. Use everywhere to keep redirects consistent.
 * Admin → /admin, Company → /dashboard, Recruiter/Agency → /recruiter
 */
export const DASHBOARD_PATHS = {
  Admin: "/admin",
  Company: "/dashboard",
  Recruiter: "/recruiter",
  Agency: "/recruiter",
};

/**
 * @param {string} [role] - User role (Admin | Company | Recruiter | Agency)
 * @returns {string} Dashboard path for the role
 */
export function getDashboardPath(role) {
  if (!role) return DASHBOARD_PATHS.Company;
  const normalized = role.charAt(0).toUpperCase() + role.slice(1);
  return DASHBOARD_PATHS[normalized] ?? DASHBOARD_PATHS.Company;
}
