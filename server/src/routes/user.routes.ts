import { Router } from "express";

import { upload } from "../helper/image";

import * as userCtrl from '../controller/user.ctrl'

import phoneValid from '../validation/auth/phone.valid';
import loginValid from '../validation/auth/login.valid';
import registerValid from '../validation/auth/register.valid';

const router = Router()

router.get('/users', userCtrl.users)
router.get('/user', userCtrl.user)
router.post('/loginphone', phoneValid, userCtrl.loginPhone)
router.post('/login', loginValid, userCtrl.login)
router.post('/register', registerValid, userCtrl.register)
router.delete('/users/:id', userCtrl.removeUser)
router.put('/users/:id', upload.single('file'), userCtrl.updatePhoto)

export default router