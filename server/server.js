'use strict'

const Hapi = require('hapi')
const knex = require('knex')
require('dotenv').config()

const app = {
  init,
  start
}

function init () {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  const conn = knex({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    }
  })

  // Routing to OFFERS LIST
  server.route({
    method: 'GET',
    path: '/offers_list',
    handler: (request, h) => {
      const dbOffersList = conn.select().table('offers_list')
      return dbOffersList
    }
  })

  // Routing to OFFER DETAILS
  server.route({
    method: 'GET',
    path: '/offer/{id}',
    handler: (request, h) => {
      const dbOfferID = encodeURIComponent(request.params.id)
      const dbOffer = conn.select().table('offers_list').where('offerID', dbOfferID)
      return dbOffer
    }
  })

  // Routing to NEW OFFER
  // Get categories list
  server.route({
    method: 'GET',
    path: '/offers',
    handler: (request, h) => {
      const dbCategories = conn.select('category').from('categories_list').orderBy('category')
      return dbCategories
    }
  })

  // Get IDs
  server.route({
    method: 'GET',
    path: '/newofferID',
    handler: (request, h) => {
      const lastID = conn.select('offerID').from('offers_list').orderBy('offerID', 'desc').limit(1)
      return lastID
    }
  })

  // Send data to DB and redirect
  server.route({
    method: 'POST',
    path: '/offers',
    handler: (request, h) => {
      return conn('offers_list').insert(request.payload)
      .then(() => h.redirect('http://localhost:3000/offers/' + request.payload.offerID))
    }
  })

  process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
  })

  return server
}

async function start () {
  const server = app.init()
  await server.start()
  console.log('Server running on %s', server.info.uri)
  return server
}

module.exports = app
