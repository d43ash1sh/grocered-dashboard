
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
        name: "Stories",
        icon: "story",
        url: "/dashboard/stories",
    },
    {
        name: "Notes",
        icon: "note",
        url: "/dashboard/notes",
    },
    {
        name: "Locals",
        icon: "shop",
        url: "/dashboard/locals",
    },
    {
        name: "Feedbacks",
        icon: "feedback",
        url: "/dashboard/feedback",
    },
    {
        name: "Analytics",
        icon: "analytics",
        url: "/dashboard/analytics",
    },
    {
        name: "Vendor",
        icon: "shop",
        url: "/dashboard/vendor",
    },

    {
        name: "Users",
        icon: "user",
        url: "/dashboard/users",
    },
    {
        name: "Web dynamics",
        icon: "quality",
        url: "/dashboard/web-dynamics",
    },
    {
        name: "Credentials",
        icon: "job",
        url: "/dashboard/credentials",
    },
    {
        name: "Live tracking",
        icon: "location",
        url: "/dashboard/live-tracking",
    },
    {
        name: "Finance",
        icon: "note",
        url: "/dashboard/finance",
    },
    {
        name: "Legals",
        icon: "note",
        url: "/dashboard/legals",
    }, {
        name: "HR",
        icon: "job",
        url: "/dashboard/hr",
    },
];
export default list;