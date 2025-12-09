import Razorpay from "razorpay";

export const razorpay = new Razorpay({
    key_id: false ? "" : "",
    key_secret: false ? "" : "",
});


//  first install the npm install razorpay crypto-js
