import path from 'node:path'
import AutoLoad from '@fastify/autoload'

const __dirname = import.meta.dirname

// Pass --options via CLI arguments in command to enable these options.
export const options = {}

export default async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    routeParams: true,
    autoHooks: true,
    cascadeHooks: true,
    overwriteHooks: true,
    options: Object.assign({}, opts)
  })
}

