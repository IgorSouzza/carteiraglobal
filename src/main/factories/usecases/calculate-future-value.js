import { LocalCalculateFutureValue } from '../../../domain/usecases'

/**
 * Factory function to get a instancce of LocalCalculateFutureValue
 * @returns {LocalCalculateFutureValue}
 */
export function makeLocalCalculateFutureValue () {
  return new LocalCalculateFutureValue()
}
