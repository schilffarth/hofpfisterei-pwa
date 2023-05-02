import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Box } from "@mui/material";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar.jsx";
import FloatingBackButton from "./components/FloatingBackButton/FloatingBackButton.jsx";
import GlobalNotification from "./components/GlobalNotification/GlobalNotification.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import LoadingProgressFallback from "./components/SuspenseFallback/LoadingProgressFallback.jsx";
import AdminAssortmentPage from "./pages/admin/AdminAssortmentPage.jsx";

// Lazy-loaded routes
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const StoresPage = lazy(() => import("./pages/StoresPage.jsx"));
const StoresOverviewPage = lazy(() => import("./pages/StoresOverviewPage.jsx"));
const StorePage = lazy(() => import("./pages/StorePage.jsx"));
const StoreOverviewPage = lazy(() => import("./pages/StoreOverviewPage.jsx"));
const AssortmentPage = lazy(() => import("./pages/AssortmentPage.jsx"));
const PreorderPage = lazy(() => import("./pages/PreorderPage.jsx"));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));

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
                            <Route path="/stores" element={<StoresPage />}>
                                <Route index element={<StoresOverviewPage />} />
                                <Route path=":store" element={<StorePage />}>
                                    <Route index element={<StoreOverviewPage />} />
                                    <Route path="assortment" element={<AssortmentPage />} />
                                </Route>
                            </Route>
                            <Route path="/products" element={<ProductsPage />} />
                            <Route path="/preorder" element={<PreorderPage />} />
                            <Route path="*" element={<NotFoundPage />} />

                            <Route path="/admin" element={<AdminPage />}>
                                <Route path="dashboard" element={<AdminDashboardPage />} />
                                <Route path="preorders" element={<AdminPreordersPage />} />
                                <Route path="assortment" element={<AdminAssortmentPage />} />
                            </Route>
                        </Routes>
                    </Suspense>
                </div>
            </div>
            <Box sx={{ height: 56 }}/> {/* Spacing so the BottomNavBar doesn't overlap */}
            <GlobalNotification />
            <BottomNavBar />
        </BrowserRouter>
    );
};

export default AppRoutes;
