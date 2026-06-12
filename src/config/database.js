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

// console.log('DATABASE_URL:', process.env.DATABASE_URL)

// if (!process.env.DATABASE_URL) {
//   throw new Error('DATABASE_URL está undefined')
// }


// console.log('DATABASE_URL:', process.env.DATABASE_URL)

let sequelize

if(process.env.MODE_NODE ==='dev'){
  console.log('Modo:' ,process.env.MODE_NODE)
    sequelize = new Sequelize({
    dialect: 'sqlite',
    storage : './sc/database/bd.squelite'
    })
  }else{
     console.log('Modo:' ,process.env.MODE_NODE)
      sequelize = new Sequelize(process.env.DATABASE_URL),
      {
        dialect: 'postgres',
        dialectOptions:{
          ssl: {require: true, rejectUnauthorized: false}

        },
        logging:false

      }

    }







// const sequelize = new Sequelize(
//   process.env.DATABASE_URL,
//   {
//     dialect: 'postgres',
//   dialectOptions: {
//     ssl:{
//       require: true,
//       rejectUnauthorized: false

//     }


//   },
//   logging: false
// }

// )

export default sequelize
