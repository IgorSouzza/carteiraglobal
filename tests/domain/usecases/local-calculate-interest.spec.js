import { LocalCalculateInterest } from '../../../src/domain/usecases'

describe('LocalCalculateInterest', () => {
  it('should return correct value in calculate function', () => {
    const total = 1351.39
    const initialInvestment = 100
    const installmentValue = 100
    const time = 12
    const sut = new LocalCalculateInterest()

    const interest = sut.calculate({
      total,
      initialInvestment,
      installmentValue,
      time
    })

    expect(interest).toBe('51.39')
  })

  it('should return an Error if some field is missing', () => {
    const installmentValue = 1000
    const time = 12
    const sut = new LocalCalculateInterest()

    expect(() => {
      sut.calculate({ installmentValue, time })
    }).toThrowError('All fields is required')
  })
})
