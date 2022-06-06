import { LocalCalculateInterest } from '../../../domain/usecases'

/**
 * Factory function to get a instancce of LocalCalculateInterest
 * @returns {LocalCalculateInterest}
 */
export function makeLocalCalculateInterest () {
  return new LocalCalculateInterest()
}
