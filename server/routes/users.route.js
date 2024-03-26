import { Router } from 'express';
import { loginUser, signupUser } from '../controllers/users.controller';

const router = Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser)

export default router;