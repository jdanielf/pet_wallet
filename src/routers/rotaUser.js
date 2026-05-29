import exprex from 'express'
import { listarUsuarios } from '../controllers/controllerUser'

const routerUser = exprex.Router()

routerUser.get('/usurio', listarUsuarios)
routeUser.post('/usuario', criarUsuario)
routeUser.get('/cadastroUsuario', cadastrarUsuario)

export default routerUser