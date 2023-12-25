import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

import dotenv from 'dotenv';
dotenv.config()

import { port } from './config/index.config';

import './database/database'
import socketConnect from './socket';
import userRoute from './routes/user.routes'
import contactRoute from './routes/contact.routes';

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

app.set('port', port)

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true, limit: '30mb' }))
app.use(express.json({ limit: '30mb' }))

app.use(userRoute)
app.use(contactRoute)

app.use(express.static(path.join(__dirname, "public")))

socketConnect(io)

server.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})