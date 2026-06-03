import express from 'express'
import { login, validarLogin,logout,recuperarSenha,validarEmailRecuperacao,novaSenha } from '../controllers/controllerLogin.js'


const routerLogin = express.Router()

routerLogin.get('/login', login)
routerLogin.post('/login', validarLogin)
routerLogin.post('/logout', logout)
routerLogin.get('/recuperarSenha',recuperarSenha)
routerLogin.post('/validarEmailRecuperacao', validarEmailRecuperacao)
routerLogin.post('/novaSenha', novaSenha)


export default routerLogin