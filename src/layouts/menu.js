
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
                url: "/dashboard/orders/returns",
            },
            {
                name: "Cancelled",
                url: "/dashboard/orders/cancelled",
            },
        ]
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
                url: "/dashboard/products/categories",
            },
            {
                name: "Review pending",
                url: "/dashboard/products/pending-review",
            },
            {
                name: "Expiring soon",
                url: "/dashboard/products/expiring",
            },
        ]
    },
    {
        name: "Chat",
        icon: "chat",
        url: "/dashboard/chat",
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
        children: [
            {
                name: "All businesses",
                url: "/dashboard/locals",
            },
            {
                name: "Add business",
                url: "/dashboard/locals/add",
            },
            {
                name: "Categories",
                url: "/dashboard/locals/categories",
            },
        ]
    },

    {
        name: "Feedbacks",
        icon: "feedback",
        children: [
            {
                name: "All feedbacks",
                url: "/dashboard/feedbacks",
            },
            {
                name: "Internal feedback",
                url: "/dashboard/feedbacks/internal",
            },
        ]
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
        hide: true
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
        hide: true
    },
    {
        name: "Finance",
        icon: "note",
        url: "/dashboard/finance",
        hide: true
    },
    {
        name: "Legals",
        icon: "note",
        url: "/dashboard/legals",
        hide: true
    }, {
        name: "HR",
        icon: "job",
        url: "/dashboard/hr",
    },
];
export default list;