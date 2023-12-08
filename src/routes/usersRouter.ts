import { Router } from 'express';

import {
    createUser,
    updateUser,
    loginUser
} from "../handlers/usersHandlers";

const usersRouter = Router();

usersRouter.get("/login", loginUser);    

usersRouter.post("/", createUser);    

usersRouter.put("/", updateUser);  


export default usersRouter;