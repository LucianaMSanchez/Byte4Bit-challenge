import { Router } from 'express';

import {
    createUser,
    updateUser,
    loginUser
} from "../controllers/usersControllers";

const usersRouter = Router();

usersRouter.post("/login", loginUser);    

usersRouter.post("/", createUser);    

usersRouter.put("/", updateUser);  


export default usersRouter;