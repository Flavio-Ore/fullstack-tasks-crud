import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'

const router = new Router()

router.get('/tasks', authRequired, (req, res) => res.send('Tasks'))

export default router
