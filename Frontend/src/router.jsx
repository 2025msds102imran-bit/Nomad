import { Route, Routes } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import RoleProtectedRoute from './components/RoleProtectedRoute';
import RedirectToRoleDashboard from './components/RedirectToRoleDashboard';

import LandingPage from './public/LandingPage';
import AboutPage from './public/AboutPage';
import ContactPage from './public/ContactPage';

import Login from './website/Login';
import Signup from './website/Signup';
import ForgotPassword from './website/ForgotPassword';
import VerifyEmail from './website/VerifyEmail';
import NotFound from './website/NotFound';
import Unauthor from './website/Unauthor';

import DashboardHome from './pages/commonPages/DashboardHome';
import { RecruiterDashboard } from './pages/recruiterRole';
import RecruiterDashboardLayout from './layouts/RecruiterDashboardLayout';
import JobsPage from './pages/commonPages/JobsPage';
import CandidatesPage from './pages/commonPages/CandidatesPage';
import RecentPlacementsPage from './pages/commonPages/RecentPlacementsPage';
import CompanyDetailPage from './pages/commonPages/CompanyDetailPage';
import MyBidPage from './pages/commonPages/MyBidPage';
import ProfilePage from './pages/commonPages/ProfilePage';
import ChatPage from './pages/commonPages/ChatPage';
import JobInterviewsPage from './pages/commonPages/JobInterviewsPage';
import SubscriptionPage from './pages/commonPages/SubscriptionPage';
import NotificationsPage from './pages/commonPages/NotificationsPage';
import SupportPage from './pages/commonPages/SupportPage';

import CompanyDashboardLayout from './pages/companyRole/CompanyDashboardLayout';
import CompanyDashboardHome from './pages/companyRole/features/CompanyDashboardHome';
import CompanyPlaceholderPage from './pages/companyRole/features/CompanyPlaceholderPage';
import AdminDashboardPage from './pages/adminRole/AdminDashboardPage';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes with footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<RedirectToRoleDashboard><LandingPage /></RedirectToRoleDashboard>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* Auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* Standalone auth pages */}
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/unauthorized" element={<Unauthor />} />

      {/* Recruiter dashboard routes - Recruiter/Agency only */}
      <Route path="/recruiter" element={<RoleProtectedRoute allowedRoles={["Recruiter", "Agency"]} redirectTo="/dashboard"><RecruiterDashboardLayout /></RoleProtectedRoute>}>
        <Route index element={<RecruiterDashboard />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="candidates" element={<CandidatesPage />} />
        <Route path="placements" element={<RecentPlacementsPage />} />
        <Route path="company/:id" element={<CompanyDetailPage />} />
        <Route path="bids" element={<MyBidPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="interviews" element={<JobInterviewsPage />} />
        <Route path="payments" element={<SubscriptionPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>

      {/* Admin dashboard routes - Admin only */}
      <Route
        path="/admin"
        element={
          <RoleProtectedRoute allowedRoles={["Admin"]} redirectTo="/dashboard">
            <AdminDashboardPage />
          </RoleProtectedRoute>
        }
      />

      {/* Company dashboard routes - Company only */}
      <Route path="/dashboard" element={<RoleProtectedRoute allowedRoles={["Company"]} redirectTo="/recruiter"><DashboardLayout /></RoleProtectedRoute>}>
        <Route index element={<DashboardHome />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="candidates" element={<CandidatesPage />} />
        <Route path="placements" element={<RecentPlacementsPage />} />
        <Route path="company/:id" element={<CompanyDetailPage />} />
        <Route path="bids" element={<MyBidPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="interviews" element={<JobInterviewsPage />} />
        <Route path="payments" element={<SubscriptionPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>

      {/* 404 catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
