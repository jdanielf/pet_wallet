import express from 'express'
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import routerPet from './src/routers/routerPet.js'
import { sincronizarDB } from './src/config/orm.js'
import routerUser from './src/routers/rotaUser.js'
import routerLogin from './src/routers/routerLogin.js'
import session from 'express-session'
import connectSqlite from 'connect-sqlite3'

const SQLiteStore = connectSqlite(session)


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'src/public')))
app.use(morgan('dev'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))

app.use(session({

  store: new SQLiteStore({
    db: 'sessoes.db',
    dir: './src/database',
    table: 'sessions',
    ttl:60 *60 * 24
  }),


   
  
  secret: 'sistema_pet',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie:{maxAge: 1000 * 60 * 60,
    // expires: new Date(Date.now() + 1000 * 60 * 60) tempo fixo,
    httpOnly: true
}
})
)

app.use(routerPet)
app.use(routerUser)
app.use(routerLogin)



app.get('/', (req, res) => {
  res.render('index', {
    title: 'Carteira de Pets',
    subtitle: 'Registre vacinas, banho, tosa e serviços para cães e gatos'
  })
})

await sincronizarDB()

app.listen(port, host, () => {
  console.log(`Servidor em execução em http://${host}:${port}`)
})
