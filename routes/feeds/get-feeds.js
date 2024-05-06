export async function getFeeds (fastify, opts) {
  fastify.get(
    '/',
    {},
    async function getFeedsHandler (request, reply) {
      return { 'get-feed': true }
    })
}
