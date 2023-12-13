import { Router } from 'express';

import {
    checkoutSession
} from "../controllers/paymentsControllers";

const paymentsRouter = Router();

  
paymentsRouter.post("/create-checkout-session", checkoutSession);    



export default paymentsRouter;