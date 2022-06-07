export const makeAccumulatedValueQuery = ({
  initialInvestment,
  installmentValue,
  time,
  interestRate
}) => `
  query AccummulatedValue {
    getAccumulatedValue(
      initialInvestment: ${initialInvestment}
      installmentValue: ${installmentValue}
      time: ${time}
      interestRate: ${interestRate}
    ) {
      futureValue
      compoundInterest
      initialInvestment
      interest
      total
    }
  }
`
