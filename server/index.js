'use strict';

const Hapi = require('hapi');
require('dotenv').config()

const init = async () => {
    
    const server = Hapi.server({
        port: 3001,
        host: 'localhost'
    });

    let knex = require('knex')({
      client: 'mysql',
      connection: {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
      }
    });

    server.route({
      config: {
        cors: {
          origin: ['*']
        }
      },
      method: 'GET',
      path: '/offers_list',
      handler: (request, h) => {
        let temp = knex.select().table('offers_list').then()
        return temp;
      }
    });

    server.route({
      config: {
        cors: {
          origin: ['*']
        }
      },
      method: 'GET',
      path: '/offer/{id}',
      handler: (request, h) => {
        let tempID = encodeURIComponent(request.params.id);
        let temp = knex.select().table('offers_list').where('offerID', tempID).then()
        return temp;
      }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
