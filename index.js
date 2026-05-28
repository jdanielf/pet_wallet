import express from 'express'
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import routerPet from './src/routers/routerPet.js'
import { sincronizarDB } from './src/config/orm.js'


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

app.use(routerPet)

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
