import Stripe from "stripe";
import { Request, Response } from 'express';
import config from "../config";

const password = config.STRIPE_PASS as string
const stripe = new Stripe(password)

export const checkoutSession = async (req: Request, res: Response) => {
    try {
        const checkoutArray = await req.body;

        const session = await stripe.checkout.sessions.create({
            line_items: checkoutArray,
            mode: "payment",
            success_url: "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url: "http://localhost:3001/api/payments/cancelled?session_id={CHECKOUT_SESSION_ID}"
        })
        return res.status(200).json(session);
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({ message: error.message });
        }
    }
}

export const successSession = async (req: Request, res: Response) => {
    try {
        const { session_id } = req.query;
        if (typeof session_id !== 'string') {
            return res.status(400).json({ message: 'Invalid session_id format' });
        }

        const session = await stripe.checkout.sessions.retrieve(session_id);

        return res.status(200).json(session) && res.redirect("http://localhost:3000/success")

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({ message: error.message });
        }
    }
}

export const cancelledSession = async (req: Request, res: Response) => {
    try {
        const { session_id } = req.query;
        if (typeof session_id !== 'string') {
            return res.status(400).json({ message: 'Invalid session_id format' });
        }

        const session = await stripe.checkout.sessions.retrieve(session_id);

        return res.status(200).json(session);

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({ message: error.message });
        }
    }
}
