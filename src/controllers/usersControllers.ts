import { Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs'

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        
        if (!user ) {
            return res.status(401).json('User not registered');
        }

        if (user.password) {
            const passwordMatch = await bcrypt.compare(password, user.password)
            if (!passwordMatch) {
                return res.status(401).json('Invalid password');
            }
        }
        const profile = {
            name: user.name,
            email: user.email,
            _id: user._id,
            role: user.role
        }

        return res.status(200).json(profile);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(401).json("There is already a user registered with that email");
        
        const hashPass = await bcrypt.hash(password, 12)
        const user = new User({ name, email, password : hashPass, role });
        await user.save();
        return res.status(200).json("Succesfully registered");
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateUser = async (req: Request, res: Response) => {
    console.log(req.params.id)
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message });
        }
    }
};
