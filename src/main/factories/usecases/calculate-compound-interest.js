import { LocalCalculateCompoundInterest } from '../../../domain/usecases'

/**
 * Factory function to get a instancce of LocalCalculateCompoundInterest
 * @returns {LocalCalculateCompoundInterest}
 */
export function makeLocalCalculateCompoundInterest () {
  return new LocalCalculateCompoundInterest()
}
