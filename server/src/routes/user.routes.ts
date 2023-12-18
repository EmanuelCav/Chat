import { Router } from "express";

import { upload } from "../helper/image";

import * as userCtrl from '../controller/user.ctrl'

import phoneValid from '../validation/auth/phone.valid';
import loginValid from '../validation/auth/login.valid';

const router = Router()

router.get('/users', userCtrl.users)
router.get('/users/:phone', userCtrl.user)
router.post('/users', phoneValid, userCtrl.loginPhone)
router.post('/users/:id', loginValid, userCtrl.login)
router.delete('/users/:id', userCtrl.removeUser)
router.put('/users/:id', upload.single('file'), userCtrl.updatePhoto)

export default router