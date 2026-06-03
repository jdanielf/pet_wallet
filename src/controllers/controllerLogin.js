import User from '../models/modelUser.js'
import path from 'path'
import bcrypt from 'bcrypt'



export const login = (req, res) => {
    res.sendFile(path.resolve('./src/public/login.html'))
}


export const validarLogin = async (req, res) => {
    const{email, senha} = req.body
    if(!email || !senha) return res.status(400).json({mensagem: "Preencha todos os campos!"})
    try{

        const usuario = await User.findOne({where: {email: email}})
        if(!usuario) return res.status(400).json({mensagem: "Usuário não encontrado!"})
         
   
    const senhaDescript = await bcrypt.compare(senha, usuario.senha)
    // console.log(senhaDescript)
    if(!senhaDescript ) return res.status(400).json({mensagem: "Senha Inválida!"})

        req.session.regenerate((err) =>  {
            if(err) return res.status(500).json({mensagem: 'Erro no servidor!'})

            req.session.usuario = {
                id: usuario.idUser,
                nome: usuario.nome,
                email: usuario.email
            }

            return res.render('index', {usuario: usuario.nome, title: 'Carteira de Pets',
                subtitle: 'Registre vacinas, banho, tosa e serviços para cães e gatos'})
        })


    }catch(err){
        res.status(500).json({mensagem: 'Erro no servidor!'})
    }
}


export const logout = (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.status(500).json({mensagem: 'Erro no servidor!'})
            res.clearCookie('connect.sid')
        res.redirect('/login')
    })
}