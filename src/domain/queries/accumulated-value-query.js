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
      saved
      compoundInterest
      monthlyAccumulated {
        value
        percent
      }
      initialInvestment {
        value
        percent
      }
      interest {
        value
        percent
      }
      total
    }
  }
`
