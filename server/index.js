'use strict'

const Hapi = require('hapi')
const knex = require('knex')
require('dotenv').config()

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost'
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
    config: {
      cors: {
        origin: ['*']
      }
    },
    method: 'GET',
    path: '/offers_list',
    handler: (request, h) => {
      const db_offerslist = conn.select().table('offers_list')
      return db_offerslist
    }
  })

  // Routing to OFFER DETAILS
  server.route({
    config: {
      cors: {
        origin: ['*']
      }
    },
    method: 'GET',
    path: '/offer/{id}',
    handler: (request, h) => {
      const db_offerID = encodeURIComponent(request.params.id)
      const db_offer = conn.select().table('offers_list').where('offerID', db_offerID)
      return db_offer
    }
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
