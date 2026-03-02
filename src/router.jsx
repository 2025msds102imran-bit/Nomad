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
      </Route>

      {/* 404 catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
