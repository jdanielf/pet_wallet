import express from 'express'
import { login, validarLogin } from '../controllers/controllerLogin.js'


const routerLogin = express.Router()

routerLogin.get('/login', login)
routerLogin.post('/login', validarLogin)


export default routerLogin