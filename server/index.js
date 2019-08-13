'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Vision = require('vision');
const HapiReactViews = require('hapi-react-views');
const React = require('react');

require('@babel/register')({
  presets: ['react', 'env']
});

const init = async () => {
    const server = Hapi.server({
        port: 3001,
        host: 'localhost',
        // routes: {
        //   files: {
        //     relativeTo: Path.join(__dirname, '../webapp/src')
        //   }
        // }
    });

    await server.register(Vision);
    await server.register(require('inert'));

    server.views({
      engines: {
        jsx: HapiReactViews
      },
      compileOptions: {}, // optional
      relativeTo: __dirname,
      path: '../webapp/src/components/Homepage/'
    })

    server.route({
      method: 'GET',
      path: '/',
      handler: function (request, h) {
        return h.view('Homepage');
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