import { Router } from 'express';
import productsRouter from './productsRouter';
import usersRouter from './usersRouter';
import paymentsRouter from './paymentsRouter';

const router = Router();

router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/payments", paymentsRouter)

export default router;