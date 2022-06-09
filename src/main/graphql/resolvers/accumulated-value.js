import { makeLocalCalculateAccumulatedValue } from '../../factories/usecases'

export default {
  Query: {
    getAccumulatedValue: (parent, args) => {
      const calculateAccumulatedValue = makeLocalCalculateAccumulatedValue()

      const { initialInvestment, installmentValue, time, interestRate } = args

      const response = calculateAccumulatedValue.calculate({
        time,
        initialInvestment,
        installmentValue,
        interestRate
      })

      return response
    }
  }
}
