import { LocalCalculateAccumulatedValue } from '../../../src/domain/usecases'

import { InterestSpy, CompoundInterestSpy, FutureValueSpy } from '../mocks'

const makeSut = () => {
  const interestSpy = new InterestSpy()
  const futureValueSpy = new FutureValueSpy()
  const compoundInterestSpy = new CompoundInterestSpy()
  const sut = new LocalCalculateAccumulatedValue(
    interestSpy,
    futureValueSpy,
    compoundInterestSpy
  )

  return { sut, interestSpy, futureValueSpy, compoundInterestSpy }
}

describe('LocalCalculateAccumulatedValue', () => {
  it('should calls spies correctly', () => {
    const {
      sut,
      compoundInterestSpy,
      futureValueSpy,
      interestSpy
    } = makeSut()

    const time = 2
    const initialInvestment = 10
    const installmentValue = 20
    const interestRate = 8

    sut.calculate({
      interestRate,
      time,
      initialInvestment,
      installmentValue
    })

    expect(compoundInterestSpy.callsCount).toBe(1)
    expect(futureValueSpy.callsCount).toBe(1)
    expect(interestSpy.callsCount).toBe(1)
  })

  it('should return an Error if some field is missing', () => {
    const { sut } = makeSut()

    expect(() => {
      sut.calculate({ initialInvestment: 1 })
    }).toThrowError('All fields is required')
  })
})
