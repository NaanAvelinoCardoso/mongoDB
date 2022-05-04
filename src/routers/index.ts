import { Router, Request, Response } from 'express';

import * as indexController from '../controllers/indexController';

const router = Router();

router.get('/', indexController.home);

router.post('/novo-usuario', indexController.addUser);

export default router;