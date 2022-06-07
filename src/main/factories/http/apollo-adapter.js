import { ApolloAdapter } from '../../../infra/http'
import { apolloClient } from '../../config'

/**
 * Factory function to get a instancce of ApolloAdapter
 * @returns {ApolloAdapter}
 */
export const makeApolloAdapter = () => new ApolloAdapter(apolloClient)
