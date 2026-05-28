import User from '../models/modelUser.js'
import crypto from 'crypto'
import path from 'path'
import bcrypt from 'bcrypt'

const listarUsuarios = async (req, res) => {
    try{
  const usuarios = await User.findAll()
  if(!usuarios)return res.status(404).json({message: 'Nenhum usuário encontrado'})
  
    res.status(200).json(usuarios)
    
      
   
    }  catch (error) {
        console.error('Erro ao listar usuários:', error)
        res.status(500).json({message: 'Erro ao listar usuários'})
    }
}
export const crudarUsuario = async (req, res) => {
  
    const { nome, email, senha } = req.body
    
    if(!nome && !email && !senha){
        return res.status(400).json({message: 'Preencha todos os campos'})



}

}
