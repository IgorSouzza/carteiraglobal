import { LocalCalculateAccumulatedValue } from '../../../domain/usecases'

import {
  makeLocalCalculateCompoundInterest,
  makeLocalCalculateFutureValue,
  makeLocalCalculateInterest
} from '.'

/**
 * Factory function to get a instancce of LocalCalculateAccumulatedValue
 * @returns {LocalCalculateAccumulatedValue}
 */
export function makeLocalCalculateAccumulatedValue () {
  return new LocalCalculateAccumulatedValue(
    makeLocalCalculateInterest(),
    makeLocalCalculateFutureValue(),
    makeLocalCalculateCompoundInterest()
  )
}
