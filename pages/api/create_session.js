const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const price = req.body.plan === 'Pro' ? 'price_1NLMT6KQJr0Ow5Emav9djlL7' : req.body.plan === 'Standard' ? 'price_1NLMTOKQJr0Ow5Em3WKpGy8d' : ''
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price,
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}?success=true&product=${req.body.plan}`,
                cancel_url: `${req.headers.origin}?canceled=true`,
            });

            res.send(session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}