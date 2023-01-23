/**
* Método HTTP: Get, Post, Put, Patch, Delete
* Put - para atualizar tudo
* Patch - para atualizar algo específico
*
* O tsx serve para traduzir typescript para javascript, devido o node só entender JS
* O cors do fastify serve para definir quais aplicações poderão acessar a API
*/
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
// app.register(cors, {
//   origin: ['http://localhost:3000'] // apenas esse pode acessar os dados do back-end
// })

app.register(appRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!')
})
