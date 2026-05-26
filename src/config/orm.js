import sequelize from './database.js'
import Pet from '../models/modelPet.js'

const sincronizarDB = async () => {
  try {
    await sequelize.authenticate()
    await Pet.sync()
    console.log('Banco de dados sincronizado com sucesso')
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error)
  }
}

export { sequelize, sincronizarDB }
