import { Request, Response } from 'express';

import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    let users = await User.find({
        age: { $gte: 18 }
    }).skip(0).limit(2);

    res.render('pages/home', {
        users
    });
};