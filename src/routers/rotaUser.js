import exprex from 'express'
import { listarUsuarios } from '../controllers/controllerUser'

const routerUser = exprex.Router()

routerUser.get('/usurio', listarUsuarios)
routerUser.post('/usurio', crudarUsuario)


export default routerUser