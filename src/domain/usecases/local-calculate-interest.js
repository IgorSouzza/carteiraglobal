/** Class responsable to contain methods to calculate final Interest */
export class LocalCalculateInterest {
  constructor () {}

  /**
   *
   * @param {Object} investmentProps - Properties to calculate Interest
   * @param {number} investmentProps.total - Total Amount (Future Value + Compound Interest)
   * @param {number} investmentProps.initialInvestment - Initial investment
   * @param {number} investmentProps.installmentValue - The amount that is added monthly
   * @param {number} investmentProps.time - Time in months
   * @returns {string}
   */
  calculate ({ total, installmentValue, time, initialInvestment }) {
    if (!installmentValue || !time || !initialInvestment) {
      throw new Error('All fields is required')
    }

    const result = total - ((installmentValue * time) + initialInvestment)
    return result.toFixed(2).toString()
  }
}
