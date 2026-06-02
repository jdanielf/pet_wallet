import exprex from 'express'
import { listarUsuarios,salvarUsuario, cadastrarUsuario, atualizarUsuario, removerUsuario, atualizarParcialUsuario } from '../controllers/controllerUser.js'

const routerUser = exprex.Router()

routerUser.get('/usuarios', listarUsuarios)
routerUser.post('/usuario', salvarUsuario)
routerUser.get('/cadastroUsuario', cadastrarUsuario)
routerUser.put('/usuario', atualizarUsuario)
routerUser.delete('/usuario/:id', removerUsuario)
routerUser.patch('/usuario/:id', atualizarParcialUsuario)



export default routerUser