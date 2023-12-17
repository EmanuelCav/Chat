import multer from 'multer';

import { imageFormat } from "./regex";

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "public")
    },
    filename(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + "_" + file.originalname)
    },
})

const validFormat = (mimetype: string, cb: any) => {

    const isFormatValid = imageFormat.test(mimetype)

    if (isFormatValid) {
        cb(null, true)
    } else {
        cb("File format is nor valid")
    }

}

export const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        validFormat(file.mimetype, cb)
    },
    limits: {
        fieldSize: 1000 * 1000
    }
})