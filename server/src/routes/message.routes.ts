import { Router } from "express";

import * as messageCtrl from '../controller/message.ctrl'

import auth from "../middleware/auth";

import messageValid from '../validation/message/message.valid';

const router = Router()

router.patch('/messages/contacts/:id', auth, messageValid, messageCtrl.createMessage)

export default router