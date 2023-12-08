import { Router } from 'express';

import {
    payment
} from "../handlers/paymentsHandlers";

const paymentsRouter = Router();

  
paymentsRouter.post("/", payment);    


export default paymentsRouter;