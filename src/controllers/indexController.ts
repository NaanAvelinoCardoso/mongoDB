import { Request, Response } from 'express';

import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    let users = await User.find({
        age: { $gte: 18 }
    }).sort({ age: 1 });

    res.render('pages/home', {
        users
    });
};