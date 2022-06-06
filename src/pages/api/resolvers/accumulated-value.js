import {
  makeLocalCalculateCompoundInterest,
  makeLocalCalculateFutureValue,
  makeLocalCalculateInterest
} from '../../../main/factories/usecases'

export const getAccumulatedValueQuery = {
  getAccumulatedValue: (parent, args) => {
    const calculateCompoundInterest = makeLocalCalculateCompoundInterest()
    const calculateFutureValue = makeLocalCalculateFutureValue()
    const calculateInterest = makeLocalCalculateInterest()

    const { initialInvestment, installmentValue, time, interestRate } = args

    const compoundInterest = calculateCompoundInterest.calculate({
      initialInvestment,
      time,
      interestRate
    })

    const futureValue = calculateFutureValue.calculate({
      installmentValue,
      time,
      interestRate
    })

    const total = parseFloat(futureValue) + parseFloat(compoundInterest)

    const interest = calculateInterest.calculate({
      total,
      initialInvestment,
      installmentValue,
      time
    })

    return {
      futureValue,
      compoundInterest,
      initialInvestment: initialInvestment.toFixed(2).toString(),
      interest,
      total: total.toString()
    }
  }
}
