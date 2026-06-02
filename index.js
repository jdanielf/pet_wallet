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
  secret: 'sistema',
  resave: false,
  saveUninitialized: false,
  cookie:{maxAge: 1000 * 60 * 60 }
}))

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
