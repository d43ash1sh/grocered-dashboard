
const list = [
    {
        name: "Home",
        icon: "home",
        url: "/dashboard",
    },
    {
        name: "Orders",
        icon: "cart",
        children: [
            {
                name: "All orders",
                url: "/dashboard/orders",
            }, {
                name: "Return & refunds",
                url: "/dashboard/refund",
            },
        ]
    },
    {
        name: "Chat",
        icon: "chat",
        url: "/dashboard/chat",
    },
    {
        name: "Feedbacks",
        icon: "feedback",
        url: "/feedback",
    },
    {
        name: "Human resource",
        icon: "job",
        url: "/hr",
    },
    {
        name: "Vendor",
        icon: "shop",
        url: "/vendor",
    },
    {
        name: "Analytics",
        icon: "analytics",
        url: "/analytics",
    },
    {
        name: "Products",
        icon: "box",
        children: [
            {
                name: "All products",
                url: "/dashboard/products",
            },
            {
                name: "Add product",
                url: "/dashboard/products/add",
            },
            {
                name: "Categories",
                url: "/dashboard/categories",
            },
            {
                name: "Review pending",
                url: "/dashboard/products/review",
            },
            {
                name: "Expiring soon",
                url: "/dashboard/products/expring",
            },
        ]
    },
    {
        name: "Local businesses",
        icon: "shop",
        url: "/local-businesses",
    },
    {
        name: "Users",
        icon: "user",
        url: "/users",
    },
    {
        name: "Stories",
        icon: "story",
        url: "/stories",
    },

    {
        name: "web dynamics",
        icon: "quality",
        url: "/web-dynamics",
    },
    {
        name: "Credentials",
        icon: "job",
        url: "/credentials",
    },
    {
        name: "Live tracking",
        icon: "location",
        url: "/live-tracking",
    },
    {
        name: "Finance",
        icon: "note",
        url: "/finance",
    },
    {
        name: "Notes",
        icon: "note",
        url: "/notes",
    },
    {
        name: "Legals",
        icon: "note",
        url: "/legals",
    },
];
export default list;