const hapi = require('@hapi/hapi')
async function createServer () {
  const server = hapi.server({
    port: 3000,
    host: 'localhost',
  })
  return server
}
module.exports = createServer
