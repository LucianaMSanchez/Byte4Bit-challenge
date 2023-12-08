import { Request, Response } from 'express';
import User from '../models/user';

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email: email });

        if (!user ) {
            return res.status(401).json('User not registered');
        }
        // if (!user.comparePassword(password)) {
        //     return res.status(401).json('Invalid password');
        // }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ errorMessage: 'Internal server error' });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, admin } = req.body;
        const user = new User({ name, email, password, admin });
        await user.save();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ errorMessage: error });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ errorMessage: error });
    }
};
