import { makeLocalCalculateFinancialProjection } from '../../factories/usecases'

export default {
  Query: {
    getFinancialProjection: (parent, args) => {
      const calculateFinancialProjection = makeLocalCalculateFinancialProjection()

      const { initialInvestment, installmentValue, time, interestRate } = args

      const response = calculateFinancialProjection.calculate({
        time,
        initialInvestment,
        installmentValue,
        interestRate
      })

      return {
        invested: response[0],
        accumulated: response[1]
      }
    }
  }
}
