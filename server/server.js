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
    routes: {
      cors: {
        origin: ['*'],
        headers: ['Authorization']
      }
    },
    debug: {
      request: ['error']
    }
    // !!! REMEMBER TO DELETE !!! DEBUG

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

  // Routing to OFFER DETAILS
  server.route({
    method: 'GET',
    path: '/offer/{id}',
    handler: (request, h) => {
      const dbOfferID = encodeURIComponent(request.params.id)
      const dbOffer = conn.select().table('offers_list').where('id', dbOfferID)
      return dbOffer
    }
  })

  // Routing to NEW OFFER
  // Get categories list
  server.route({
    method: 'GET',
    path: '/categories',
    handler: (request, h) => {
      const dbCategories = conn.select().table('categories_list')
      return dbCategories
    }
  })

  // Send data to DB and redirect
  server.route({
    method: 'POST',
    path: '/offers',
    handler: async (request, h) => {
      const json = request.payload
      json.date = new Date().toLocaleString().slice(0, 10)
      const data = await conn('offers_list').insert(json)
      const id = data[0]
      return { id }
    }
  })

  // Return offers
  server.route({
    method: 'GET',
    path: '/offers_list',
    handler: (request, h) => {
      const category = request.query.category
      const order = request.query.orderby
      const direction = request.query.direction

      const res = conn.select().table('offers_list').modify(function(queryBuilder) {
        if(category != 0) {
          queryBuilder.where('categoryID', category)
        }
      }).orderBy(order, direction)

      return res
    }
  })

  // DELETE SELECTED ROWS
  // !!! REMEMBER TO DELETE !!!
  // server.route({
  //   method: 'GET',
  //   path: '/deleterows',
  //   handler: (request, h) => {
  //     const del = conn('offers_list').whereBetween('id', [133, 199]).del()
  //     return del
  //   }
  // })

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
