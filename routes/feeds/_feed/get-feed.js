export async function getFeed (fastify, opts) {
  fastify.get(
    '/',
    {},
    async function getFeedHandler (request, reply) {
      const { feed: feedId } = request.params
      return { feedId }
    }
  )
}

