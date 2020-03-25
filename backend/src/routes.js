const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


const routes = express.Router()

routes.post('/sessions', SessionController.create)

// Rotas de Criação e listagem das ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)
// Rotas de Criação e listagem dos casos
routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id',IncidentsController.delete)

routes.get('/profile', ProfileController.index)


module.exports = routes