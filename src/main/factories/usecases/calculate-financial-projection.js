import { LocalCalculateFinancialProjection } from '../../../domain/usecases'

import {
  makeLocalCalculateCompoundInterest,
  makeLocalCalculateFutureValue,
  makeLocalCalculateInterest
} from '.'

/**
 * Factory function to get a instancce of LocalCalculateFinancialProjection
 * @returns {LocalCalculateFinancialProjection}
 */
export function makeLocalCalculateFinancialProjection () {
  return new LocalCalculateFinancialProjection(
    makeLocalCalculateInterest(),
    makeLocalCalculateFutureValue(),
    makeLocalCalculateCompoundInterest()
  )
}
