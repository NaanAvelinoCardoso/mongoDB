import { Request, Response } from 'express';

import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    let usuarios = await User.find({});
    console.log("USUARIOS: ", usuarios);



    res.send("<h1>Pagina Principal</h1>");
};