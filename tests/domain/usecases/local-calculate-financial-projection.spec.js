import { LocalCalculateFinancialProjection } from '../../../src/domain/usecases'

import { InterestSpy, CompoundInterestSpy, FutureValueSpy } from '../mocks'

const makeSut = () => {
  const interestSpy = new InterestSpy()
  const futureValueSpy = new FutureValueSpy()
  const compoundInterestSpy = new CompoundInterestSpy()
  const sut = new LocalCalculateFinancialProjection(
    interestSpy,
    futureValueSpy,
    compoundInterestSpy
  )

  return { sut, interestSpy, futureValueSpy, compoundInterestSpy }
}

describe('LocalCalculateFinancialProjection', () => {
  it('should return a array of data and calls injections correctly', () => {
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

    const response = sut.calculate({
      interestRate,
      time,
      initialInvestment,
      installmentValue
    })

    expect(compoundInterestSpy.callsCount).toBe(time + 1)
    expect(futureValueSpy.callsCount).toBe(time + 1)
    expect(interestSpy.callsCount).toBe(time + 1)
    expect(response).toEqual([
      { name: 'Investido', data: [10, 30, 50], color: '#868686' },
      { name: 'Acumulado', data: [0, 0, 0], color: '#09B682' }
    ])
  })

  it('should throws an Error if some field is missing', () => {
    const { sut } = makeSut()

    expect(() => {
      sut.calculate({ time: 1 })
    }).toThrowError()
  })
})
