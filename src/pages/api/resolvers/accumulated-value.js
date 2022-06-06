import {
  makeLocalCalculateCompoundInterest,
  makeLocalCalculateFutureValue
} from '../../../main/factories/usecases'

export const getAccumulatedValueQuery = {
  getAccumulatedValue: (parent, args) => {
    const calculateCompoundInterest = makeLocalCalculateCompoundInterest()
    const calculateFutureValue = makeLocalCalculateFutureValue()

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

    return {
      futureValue,
      compoundInterest,
      initialInvestment: initialInvestment.toFixed(2).toString(),
      interest: (total - ((installmentValue * time) + initialInvestment)).toFixed(2).toString(),
      total: total.toString()
    }
  }
}
