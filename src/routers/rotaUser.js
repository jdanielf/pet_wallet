import exprex from 'express'
import { autenticar, validarPerfil } from '../middlewares/auth.js'
import { listarUsuarios,salvarUsuario, cadastrarUsuario, atualizarUsuario, removerUsuario, atualizarParcialUsuario } from '../controllers/controllerUser.js'

const routerUser = exprex.Router()

routerUser.get('/usuarios', listarUsuarios)
routerUser.post('/usuario', salvarUsuario)
routerUser.get('/cadastroUsuario',validarPerfil(['admin']), cadastrarUsuario)
routerUser.put('/usuario', atualizarUsuario)
routerUser.delete('/usuario/:id', removerUsuario)
routerUser.patch('/usuario/:id', atualizarParcialUsuario)



export default routerUser