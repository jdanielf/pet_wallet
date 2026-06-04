const perfils = ['cliente', 'petshop', 'admin']


export const autenticar = (req, res, next) => {

    if(!req.session.usuario)return res.redirect('/login')

    next()





}

export function validarPerfil (perfils){

    return (req, res, next) => {
        const perfil = req.session.usuario.perfil
        if (!perfils.includes(perfil)) return res.status(403).json({msg:'Acesso negado'})

        next()
    }
}