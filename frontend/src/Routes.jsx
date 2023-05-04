import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Box } from "@mui/material";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar.jsx";
import FloatingBackButton from "./components/FloatingBackButton/FloatingBackButton.jsx";
import GlobalNotification from "./components/GlobalNotification/GlobalNotification.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import LoadingProgressFallback from "./components/SuspenseFallback/LoadingProgressFallback.jsx";
import AdminAssortmentPage from "./pages/admin/AdminAssortmentPage.jsx";
import WayOfTheBread from "./pages/cms/WayOfTheBreadPage.jsx";

// Lazy-loaded routes
const LandingPage = lazy(() => import("./pages/cms/LandingPage.jsx"));
const StoresPage = lazy(() => import("./pages/StoresPage.jsx"));
const PreorderPage = lazy(() => import("./pages/PreorderPage.jsx"));
const PreorderCheckoutPage = lazy(() => import("./pages/PreorderCheckoutPage.jsx"));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const AdminPage = lazy(() => import("./pages/admin/AdminPage.jsx"));
const AdminDashboardPage = lazy(() => import("./pages/admin/AdminDashboardPage.jsx"));
const AdminPreordersPage = lazy(() => import("./pages/admin/AdminPreordersPage.jsx"));

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <FloatingBackButton />
            <div id="app-container">
                <div>
                    <Suspense fallback={<LoadingProgressFallback />}>
                        <Routes>
                            <Route index element={<LandingPage />} />
                            <Route path="/home" element={<LandingPage />} />
                            <Route path="/preorder" element={<PreorderPage />} />
                            <Route path="/preorder-checkout" element={<PreorderCheckoutPage />} />
                            <Route path="/stores" element={<StoresPage />} />
                            <Route path="*" element={<NotFoundPage />} />

                            {/* CMS */}
                            <Route path="/way-of-the-bread" element={<WayOfTheBread />} />

                            <Route path="/admin" element={<AdminPage />}>
                                <Route path="dashboard" element={<AdminDashboardPage />} />
                                <Route path="preorders" element={<AdminPreordersPage />} />
                                <Route path="assortment" element={<AdminAssortmentPage />} />
                            </Route>
                        </Routes>
                    </Suspense>
                </div>
            </div>
            <Box id="bottom-navbar-spacing" sx={{ height: 56 }} /> {/* Spacing so the BottomNavBar doesn't
             overlap */}
            <GlobalNotification />
            <BottomNavBar />
        </BrowserRouter>
    );
};

export default AppRoutes;
