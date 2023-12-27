import { Router } from "express";

import { upload } from "../helper/image";

import * as userCtrl from '../controller/user.ctrl'

import phoneValid from '../validation/auth/phone.valid';
import loginValid from '../validation/auth/login.valid';
import nameValid from "../validation/auth/name.valid";

import auth from "../middleware/auth";

const router = Router()

router.get('/users', userCtrl.users)
router.get('/users/:phone', userCtrl.user)
router.patch('/users', phoneValid, userCtrl.loginPhone)
router.post('/users/:id', loginValid, userCtrl.login)
router.delete('/users/:id', userCtrl.removeUser)
router.put('/users/name/:id', auth, nameValid, userCtrl.updateName)
router.put('/users/:id', auth, upload.single('file'), userCtrl.updatePhoto)

export default router