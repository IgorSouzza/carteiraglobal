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
   * @returns {number}
   */
  calculate ({ total, installmentValue, time, initialInvestment }) {
    if (
      typeof total === 'undefined' ||
      typeof installmentValue === 'undefined' ||
      typeof time === 'undefined' ||
      typeof initialInvestment === 'undefined'
    ) {
      throw new Error('All fields is required')
    }

    const result = total - ((installmentValue * time) + initialInvestment)
    return parseFloat(result.toFixed(2))
  }
}
