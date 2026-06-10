import path from 'path'
import { fileURLToPath } from 'url'
import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: path.join(__dirname, '..', 'database', 'pets.sqlite'),
//   logging: false
// })


const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect: 'postgres',
  dialectOptions: {
    ssl:{
      require: true,
      rejectUnauthorized: false

    }


  },
  logging: false
}

)

export default sequelize
