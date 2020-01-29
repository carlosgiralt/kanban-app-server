import { Router } from 'express';

const router = new Router();

router.route('/').get((req, res) => res.json([]));

export const TaskRouter = router;
