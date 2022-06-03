/** Class responsable to contain methods to calculate Compound Interest */
export class LocalCalculateCompoundInterest {
  constructor () {}

  /**
   *
   * @param {Object} investmentProps - Properties to calculate Compound Interest
   * @param {number} investmentProps.initialInvestment - The initial investment
   * @param {number} investmentProps.time - Time in months
   * @param {number} investmentProps.interestRate - Interest rate
   * @returns {string}
   */
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
