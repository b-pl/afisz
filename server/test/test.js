'use strict'

const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script()
const { init } = require('../server')

describe('GET /', () => {
  let server

  beforeEach(async () => {
    server = await init()
  })

  afterEach(async () => {
    await server.stop()
  })

  it('/offers_list responds with 200', async() => {
    const res = await server.inject({
      method: 'GET',
      url: '/offers_list'
    })
    expect(res.statusCode).to.equal(200)
  })

  it('/offer/{id} responds with 200'), async() => {
    const res = await server.inject({
      method: 'GET',
      url: `/offer/$id`
    })
    expect(res.statusCode).to.equal(200)
  }
})