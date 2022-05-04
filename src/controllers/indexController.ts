import { Request, Response } from 'express';

import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    let users = await User.find({});

    res.render('pages/home', {
        users
    });
};

export const addUser = async (req: Request, res: Response) => {
    let name: string = req.body.name;
    let age: number = req.body.age;
    let email: string = req.body.email; 

    if(name) {
        let newUser = new User();
            newUser.name = name;
            newUser.age = age;
            newUser.email = email;
            if(newUser.age) {
                newUser.age = age;
            } else {
                newUser.age = 18;
            }
        let result = await newUser.save();
        res.redirect("/");       
    }
};