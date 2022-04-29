import { Request, Response } from 'express';

import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    let usuarios = await User.find({});


    res.render('pages/home', {
        usuarios
    });
};