import React, { lazy } from "react";

// All pages that rely on 3rd party components (other than Bootstrap) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import EmptyLayout from "./layouts/Empty";
import DashboardLayout from "./layouts/Dashboard";

// Sitemap
import SitemapPage from "./pages/sitemap";


// Dashboard
import DashboardPage from "./pages/dashboard";

const Chat = lazy(() => import('./pages/chat'));
const Notes = lazy(() => import('./pages/notes'));

const Orders = lazy(() => import('./pages/orders'));
const Cancelled = lazy(() => import('./pages/orders/cancelled'));
const Returns = lazy(() => import('./pages/orders/returns'));

const Products = lazy(() => import('./pages/products'));
const AddProducts = lazy(() => import('./pages/products/add'));
const ProductsCategories = lazy(() => import('./pages/products/categories'));
const PendingReview = lazy(() => import('./pages/products/pending-review'));
const Expiring = lazy(() => import('./pages/products/expiring'));

const Locals = lazy(() => import('./pages/locals'));
const AddLocals = lazy(() => import('./pages/locals/add'));
const LocalCategories = lazy(() => import('./pages/locals/categories'));

const Feedbacks = lazy(() => import('./pages/feedbacks'));
const FeedbackInternal = lazy(() => import('./pages/feedbacks/internal'));



const Stories = lazy(() => import('./pages/stories'));
const Hr = lazy(() => import('./pages/hr'));
const Credentials = lazy(() => import('./pages/credentials'));
const Users = lazy(() => import('./pages/users'));
const Vendor = lazy(() => import('./pages/vendor'));
const Analytics = lazy(() => import('./pages/analytics'));


const routes = [
    {
        path: "/",
        element: <EmptyLayout />,
        children: [
            {
                path: "",
                element: <SitemapPage />,
            },
        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element: <DashboardPage />,
            },
            {
                path: "refund",
                element: <DashboardPage />,
            },
            {
                path: "chat",
                element: <Chat />,
            },
            {
                path: "stories",
                element: <Stories />,
            },
            {
                path: "notes",
                element: <Notes />,
            },
            {
                path: "hr",
                element: <Hr />,
            },
            {
                path: "credentials",
                element: <Credentials />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "vendor",
                element: <Vendor />,
            },
            {
                path: "analytics",
                element: <Analytics />,
            },
            {
                path: "*",
                element: <DashboardPage />,
            },
        ]
    },
    {
        path: "dashboard/orders",
        element: <DashboardLayout />,
        children: [
            {
                path: "returns",
                element: <Returns />,
            },
            {
                path: "cancelled",
                element: <Cancelled />,
            },
            {
                path: "",
                element: <Orders />,
            },
        ]
    },
    {
        path: "dashboard/products",
        element: <DashboardLayout />,
        children: [
            {
                path: "add",
                element: <AddProducts />,
            },
            {
                path: "categories",
                element: <ProductsCategories />,
            },
            {
                path: "pending-review",
                element: <PendingReview />,
            },
            {
                path: "expiring",
                element: <Expiring />,
            },
            {
                path: "",
                element: <Products />,
            },
        ]
    },

    {
        path: "dashboard/locals",
        element: <DashboardLayout />,
        children: [
            {
                path: "add",
                element: <AddLocals />,
            },
            {
                path: "categories",
                element: <LocalCategories />,
            },
            {
                path: "",
                element: <Locals />,
            }
        ]
    },

    {
        path: "dashboard/feedbacks",
        element: <DashboardLayout />,
        children: [
            {
                path: "internal",
                element: <FeedbackInternal />,
            },
            {
                path: "",
                element: <Feedbacks />,
            },
        ]
    },
];
export default routes;
