import { Route, Routes } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

import LandingPage from './pages/commonPages/LandingPage';
import AboutPage from './pages/commonPages/AboutPage';
import ContactPage from './pages/commonPages/ContactPage';

import Login from './website/Login';
import Signup from './website/Signup';
import ForgotPassword from './website/ForgotPassword';
import VerifyEmail from './website/VerifyEmail';
import NotFound from './website/NotFound';
import Unauthor from './website/Unauthor';

import DashboardHome from './pages/companyRole/DashboardHome';
import JobsPage from './pages/companyRole/JobsPage';
import CandidatesPage from './pages/companyRole/CandidatesPage';
import RecentPlacementsPage from './pages/companyRole/RecentPlacementsPage';
import CompanyDetailPage from './pages/companyRole/CompanyDetailPage';
import MyBidPage from './pages/companyRole/MyBidPage';
import ProfilePage from './pages/companyRole/ProfilePage';
import ChatPage from './pages/companyRole/ChatPage';
import SubscriptionPage from './pages/companyRole/SubscriptionPage';
import NotificationsPage from './pages/companyRole/NotificationsPage';
import SupportPage from './pages/companyRole/SupportPage';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes with footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
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

      {/* Company dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="candidates" element={<CandidatesPage />} />
        <Route path="placements" element={<RecentPlacementsPage />} />
        <Route path="company/:id" element={<CompanyDetailPage />} />
        <Route path="bids" element={<MyBidPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chat" element={<ChatPage />} />
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
