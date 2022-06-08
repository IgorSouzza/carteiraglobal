export const makeFinancialProjectionQuery = ({
  initialInvestment,
  installmentValue,
  time,
  interestRate
}) => `
  query FinancialProjection {
    getFinancialProjection(
      initialInvestment: ${initialInvestment}
      installmentValue: ${installmentValue}
      time: ${time}
      interestRate: ${interestRate}
    ) {
      invested {
        name
        color
        data
      }
      accumulated {
        name
        color
        data
      }
    }
  }
`
