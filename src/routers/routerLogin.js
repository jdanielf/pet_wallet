import express from 'express'
import { login, validarLogin,logout } from '../controllers/controllerLogin.js'


const routerLogin = express.Router()

routerLogin.get('/login', login)
routerLogin.post('/login', validarLogin)
routerLogin.post('/logout', logout)
routerLogin.get('/recuperarSenha',recuperarSenha)


export default routerLogin