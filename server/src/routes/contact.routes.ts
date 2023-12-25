import { Router } from "express";

import * as contactCtrl from '../controller/contact.ctrl'

const router = Router()

router.post('/contacts', contactCtrl.createContact)

export default router