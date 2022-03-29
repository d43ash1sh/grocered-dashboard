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

// import Chat from "./pages/chat";
// import Notes from "./pages/notes";
// import Orders from "./pages/orders";
// import Products from "./pages/products";
// import Stories from "./pages/stories";

const Chat = lazy(() => import('./pages/chat'));
const Notes = lazy(() => import('./pages/notes'));
const Orders = lazy(() => import('./pages/orders'));
const Products = lazy(() => import('./pages/products'));
const Stories = lazy(() => import('./pages/stories'));


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
                path: "notes",
                element: <Notes />,
            },
            {
                path: "orders",
                element: <Orders />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "stories",
                element: <Stories />,
            },
            {
                path: "*",
                element: <DashboardPage />,
            },
        ]
    },
];
export default routes;
