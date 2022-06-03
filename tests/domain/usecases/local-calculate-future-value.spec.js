import { LocalCalculateFutureValue } from '../../../src/domain/usecases'

describe('LocalCalculateFutureValue', () => {
  it('should return correct value in calculate function', () => {
    const installmentValue = 1000
    const time = 120
    const interestRate = 8
    const sut = new LocalCalculateFutureValue()

    const futureValue = sut.calculate({ installmentValue, time, interestRate })

    expect(futureValue).toBe('180124.27')
  })

  it('should return an Error if some field is missing', () => {
    const installmentValue = 1000
    const interestRate = 8
    const sut = new LocalCalculateFutureValue()

    expect(() => {
      sut.calculate({ installmentValue, interestRate })
    }).toThrowError('All fields is required')
  })
})
