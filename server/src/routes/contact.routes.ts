import { Router } from "express";

import * as contactCtrl from '../controller/contact.ctrl'

import auth from "../middleware/auth";

import contactValid from "../validation/contact/contact.valid";

const router = Router()

router.patch('/contacts', auth, contactValid, contactCtrl.createContact)

export default router