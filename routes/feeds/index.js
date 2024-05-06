import { getFeeds } from './get-feeds.js'

export default async function feedsRoutes (fastify, opts) {
  await Promise.all([
    getFeeds(fastify, opts)
  ])
}
