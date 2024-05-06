export default async function (fastify, opts) {
  fastify.decorate('wee', 'woo')
}
