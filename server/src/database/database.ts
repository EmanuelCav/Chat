import mongoose from 'mongoose'

import { databaseUri } from "../config/index.config";

(async () => {

    try {
        
        await mongoose.connect(`${databaseUri}`)

        console.log("Database is running");

    } catch (error) {
        console.log(error);
    }

})()