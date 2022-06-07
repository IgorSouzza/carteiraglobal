
import { setupApolloServer } from '../../main/config'

const apolloServer = setupApolloServer()
const startServer = apolloServer.start()

export default async function handler (req, res) {
  await startServer
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

export const config = {
  api: {
    bodyParser: false
  }
}
