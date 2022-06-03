import { LocalCalculateCompoundInterest } from '../../../src/domain/usecases'

describe('LocalCalculateCompoundInterest', () => {
  it('should return correct value in calculate function', () => {
    const initialInvestment = 20000
    const time = 120
    const interestRate = 8
    const sut = new LocalCalculateCompoundInterest()

    const compoundInterest = sut.calculate({
      initialInvestment,
      time,
      interestRate
    })

    expect(compoundInterest).toBe('43178.50')
  })
})
