import { getFeed } from './get-feed.js'

export default async function podcastFeedsRoutes (fastify, opts) {
  await Promise.all([
    getFeed(fastify, opts)
  ])
}
