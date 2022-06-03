export class LocalCalculateCompoundInterest {
  constructor () {}

  calculate ({ initialInvestment, time, interestRate }) {
    if (!initialInvestment || !time || !interestRate) {
      throw new Error('All fields is required')
    }

    const equivalentRate =
      ((Math.pow(1 + interestRate / 100, 1 / 12) - 1) * 100) / 100

    const fv = initialInvestment * (Math.pow(1 + equivalentRate, time))
    return fv.toFixed(2).toString()
  }
}
