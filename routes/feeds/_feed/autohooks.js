export default async function (fastify, opts) {
  // Add basic auth for feed and feed episode routes
  fastify.register(import('@fastify/basic-auth'), {
    validate,
    authenticate: true
  })

  async function validate (uuid, token, request, reply) {
    return true
  }
}
