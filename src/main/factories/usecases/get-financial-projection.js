import { RemoteGetFinancialProjection } from '../../../domain/usecases'
import { makeApiUrl, makeApolloAdapter } from '../http'

/**
 * Factory function to get a instance of RemoteGetFinancialProjection
 * @returns {RemoteGetFinancialProjection}
 */
export function makeRemoteGetFinancialProjection () {
  return new RemoteGetFinancialProjection(makeApiUrl('/graphql'), makeApolloAdapter())
}
