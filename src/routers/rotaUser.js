import exprex from 'express'
import { listarUsuarios,salvarUsuario, cadastrarUsuario, atualizarUsuario, removerUsuario, atualizarParcialUsuario } from '../controllers/controllerUser.js'

const routerUser = exprex.Router()

routerUser.get('/usuarios', listarUsuarios)
routerUser.post('/usuario', salvarUsuario)
routerUser.get('/cadastroUsuario', cadastrarUsuario)
routerUser.put('/usuario', atualizarUsuario)
routerUser.delete('/usuario', removerUsuario)
routerUser.patch('/usuario', atualizarParcialUsuario)


export default routerUser