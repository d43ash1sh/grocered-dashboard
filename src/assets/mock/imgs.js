
import s1 from "./image/s-1.webp";
import s2 from "./image/s-2.webp";
import s3 from "./image/s-3.webp";
import s4 from "./image/s-4.webp";

import p1 from "./image/p-1.webp";
import p2 from "./image/p-2.webp";
import p3 from "./image/p-3.webp";
import p4 from "./image/p-4.webp";
import p5 from "./image/p-5.webp";
import p6 from "./image/p-6.webp";
import p7 from "./image/p-7.webp";
import p8 from "./image/p-8.webp";
import p9 from "./image/p-9.webp";

import u1 from "./image/u-2.webp";
import u2 from "./image/u-3.webp";
import u3 from "./image/u-4.webp";
import u4 from "./image/u-5.webp";
import u5 from "./image/u-1.webp";


const list = {
    s: [s1, s2, s3, s4, s1],
    u: [u1, u2, u3, u4, u5],
    p: [p1, p2, p3, p4, p5, p6, p7, p8, p9],
    orders: [
        { dp: u1, name: "Ishaan", amount: 500 },
        { dp: u2, name: "Dhruv", amount: 563 },
        { dp: u3, name: "Ram", amount: 1877 },
        { dp: u4, name: "Sayan", amount: 153 },
        { dp: u5, name: "Rohit", amount: 764 },
        { dp: u1, name: "Soumick", amount: 234 },
        { dp: u3, name: "Anjali", amount: 180 },
        { dp: u2, name: "Ajay", amount: 456 },
        { dp: u4, name: "Ishaan", amount: 1566 }
    ],

    feedbacks: [
        { id: 1, dp: u1, priority: 1, name: "Ishaan", date: "2m" },
        { id: 2, dp: u2, priority: 2, name: "Dhruv", date: "20m" },
        { id: 3, dp: u3, priority: 2, name: "Ram", date: "Just now" },
        { id: 4, dp: u4, priority: 2, name: "Sayan", date: "1 Day" },
        { id: 5, dp: u5, priority: 1, name: "Rohit", date: "2 Apr" },
        { id: 6, dp: u1, priority: 3, name: "Soumick", date: "5m" },
        { id: 7, dp: u3, priority: 2, name: "Anjali", date: "6h" },
        { id: 8, dp: u2, priority: 3, name: "Ajay", date: "15m" },
        { id: 9, dp: u4, priority: 3, name: "Ishaan", date: "25 Mar" }
    ],



    chatlist: [
        { dp: u1, id: 100, name: "Ishaan", text: "ok", date: "2m" },
        { dp: u2, id: 101, name: "Dhruv", text: "So whats the plan", date: "20m" },
        { dp: u3, id: 102, name: "Ram", text: "are you moving", date: "Just now" },
        { dp: u4, id: 103, name: "Sayan", text: "I am just scared of ghost so I will not be able to join you guys", date: "1h" },
        { dp: u5, id: 104, name: "Rohit", text: "Please share the order status", date: "29 Mar" },
        { dp: u1, id: 105, name: "Soumick", text: "My refund is still under pending", date: "20 Mar" },
        { dp: u3, id: 106, name: "Anjali", text: "Thats alright", date: "2min" },
        { dp: u2, id: 107, name: "Ajay", text: "Sounds good to me", date: "5 feb" },
        { dp: u4, id: 108, name: "Ishaan", text: "sure", date: "2min" },
        { dp: u2, id: 109, name: "Dhruv", text: "So whats the plan", date: "20m" },
        { dp: u3, id: 110, name: "Ram", text: "are you moving", date: "Just now" },
    ],
    chats: [
        {
            id: 100,
            user: 565,
            text: "hi grocered i have a query on my order",
        },
        {
            id: 101,
            user: 100,
            text: "hi sayan",
        },
        {
            id: 101,
            user: 100,
            text: "hi sayan we would love  to help you out",
        },
        {
            id: 102,
            user: 100,
            text: "but before that, let us know the order id agains which you are facing problem. and also share the details of xyz and abc",
        },
        {
            id: 103,
            user: 565,
            text: "my order id is 35345345",
        },
        {
            id: 104,
            user: 565,
            text: "oky",
        },
        {
            id: 105,
            user: 565,
            text: "hi sayan we would love  to help you out",
        },
        {
            id: 106,
            user: 100,
            text: "but before that",
        },
        {
            id: 107,
            user: 100,
            text: "let us know",
        },
        {
            id: 108,
            user: 565,
            text: "but before that, let us know",
        },
        {
            id: 109,
            user: 100,
            text: "messag 8, but before that, let us know the order id agains which you are facing problem. and also share the details of xyz and abc",
        },
    ],
    products: [
        { id: 100, image: p1, name: "Product 1", mrp: "134", qty: "200ml" },
        { id: 101, image: p2, name: "Product 2", mrp: "45", qty: "500g" },
        { id: 102, image: p3, name: "Product 3", mrp: "13", qty: "1Kg" },
        { id: 103, image: p4, name: "Product 4", mrp: "87", qty: "20g" },
        { id: 104, image: p5, name: "Product 5", mrp: "145", qty: "1L" },
        { id: 105, image: p6, name: "Product 6", mrp: "245", qty: "20g" },
        { id: 106, image: p7, name: "Product 7", mrp: "399", qty: "1Kg" },
        { id: 107, image: p8, name: "Product 8", mrp: "35", qty: "20g" },
        { id: 108, image: p9, name: "Product 9", mrp: "65", qty: "200g" }
    ],
    stories: [
        { id: 1, image: s1, dp: u1, text: "Use up lots of cars" },
        { id: 2, image: s2, dp: u2, text: "10 Expert Tips for Grocery Shopping on a Budget" },
        { id: 3, image: s3, dp: u3, text: "Learn how to Buy perishable foods in quantities you’ll use" },
        { id: 103, image: s4, dp: u4, text: "Long The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs" },
        { id: 4, image: s1, dp: u5, text: "18 easy recipes to use up lots of tomatoes" },
        { id: 5, image: s2, dp: u1, text: "The first evidence of carrot used as a food crop is in the Iranian Plateau and the Persian Empire in the 10th century AD" },
        { id: 6, image: s4, dp: u2, text: "10 Expert Tips for Grocery Shopping on a Budget" },
        { id: 7, image: s3, dp: u3, text: "Learn how to Buy perishable foods in quantities you’ll use" },
        { id: 8, image: s2, dp: u4, text: "Food crop is in the Iranian Plateau and the Persian Empire in the 10th century AD" },
        { id: 9, image: s4, dp: u5, text: "Persian Empire in the 10th century AD" },
        { id: 10, image: s1, dp: u1, text: "Use up lots of cars" },
        { id: 11, image: s2, dp: u2, text: "10 Expert Tips for Grocery Shopping on a Budget" },
        { id: 12, image: s3, dp: u3, text: "Learn how to Buy perishable foods in quantities you’ll use" },
        { id: 13, image: s4, dp: u4, text: "10 Expert Tips for Grocery Shopping on a Budget to use up lots of tomatoes" },
        { id: 14, image: s1, dp: u5, text: "18 easy recipes to use up lots of tomatoes" },
        { id: 15, image: s2, dp: u1, text: "The first evidence of carrot used as a food crop is in the Iranian Plateau and the Persian Empire in the 10th century AD" },
        { id: 16, image: s4, dp: u2, text: "10 Expert Tips for Grocery Shopping on a Budget" },
        { id: 17, image: s3, dp: u3, text: "Learn how to Buy perishable foods in quantities you’ll use" },
        { id: 18, image: s2, dp: u4, text: "Food crop is in the Iranian Plateau and the Persian Empire in the 10th century AD" },
        { id: 19, image: s4, dp: u5, text: "Persian Empire in the 10th century AD" },
    ]
};
export default list;