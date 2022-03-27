import React from "react";

// All pages that rely on 3rd party components (other than Bootstrap) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import EmptyLayout from "./layouts/Empty";
import DefaultLayout from "./layouts/Default";

// Sitemap
import SitemapPage from "./pages/sitemap";


// Dashboard
import DashboardPage from "./pages/dashboard";




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
        element: <DefaultLayout />,
        children: [
            {
                path: "",
                element: <DashboardPage />,
            },
        ]
    },
];
export default routes;
