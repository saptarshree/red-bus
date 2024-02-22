const express = require('express');
const router = express.Router();

const stripe = require("stripe")("sk_test_51OiMM2SHEhEInqR36bqKL0K2w9XE75DhB5f2p6GfIDegTNWaz0q6BOVlV4yAeXT6lOWFGq0Jq6yXrf4X158NiGiE00WfUxfg24");
router.post("/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    console.log(products);

    // Calculate total amount
    const totalPrice = products.reduce((acc, price) => acc + price, 0);

    const lineItems = [{
        price_data: {
            currency: "inr",
            product_data: {
                name: "bus",
            },
            unit_amount: totalPrice * 100, // Convert to smallest currency unit
        },
        quantity: 1
    }];

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000",
            shipping_address_collection: {
                allowed_countries: ['US'],
            },
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Failed to create checkout session" });
    }
});
module.exports= router