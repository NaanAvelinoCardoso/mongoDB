import { Router, Request, Response } from 'express';

import * as indexController from '../controllers/indexController';

const router = Router();

router.get('/', indexController.home);

export default router;