import { RemoteGetAccumulatedValue } from '../../../data/usecases'
import { makeApiUrl, makeApolloAdapter } from '../http'

/**
 * Factory function to get a instancce of RemoteGetAccumulatedValue
 * @returns {RemoteGetAccumulatedValue}
 */
export function makeRemoteGetAccumulatedValue () {
  return new RemoteGetAccumulatedValue(makeApiUrl('/graphql'), makeApolloAdapter())
}
