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
    const monthlyAccumulated = installmentValue * time

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

    const interestPercent = (interest / total) * 100
    const initialInvestmentPercent = (initialInvestment / total) * 100
    const monthlyAccumulatedPercent = (monthlyAccumulated / total) * 100
    const saved = (total - interest).toFixed(2).toString()

    return {
      futureValue,
      compoundInterest,
      saved,
      monthlyAccumulated: {
        value: monthlyAccumulated,
        percent: monthlyAccumulatedPercent
      },
      initialInvestment: {
        value: initialInvestment.toFixed(2).toString(),
        percent: initialInvestmentPercent
      },
      interest: {
        value: interest,
        percent: interestPercent
      },
      total: total.toString()
    }
  }
}
