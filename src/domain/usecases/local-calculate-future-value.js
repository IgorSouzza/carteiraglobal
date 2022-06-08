/** Class responsable to contain methods to calculate Future Value */
export class LocalCalculateFutureValue {
  constructor () {}

  /**
   *
   * @param {Object} investmentProps - Properties to calculate Future Value
   * @param {number} investmentProps.installmentValue - The amount that is added monthly
   * @param {number} investmentProps.time - Time in months
   * @param {number} investmentProps.interestRate - Interest rate
   * @returns {number}
   */
  calculate ({ installmentValue, time, interestRate }) {
    if (
      typeof installmentValue === 'undefined' ||
      typeof time === 'undefined' ||
      typeof interestRate === 'undefined'
    ) {
      throw new Error('All fields is required')
    }

    const equivalentRate =
      ((Math.pow(1 + interestRate / 100, 1 / 12) - 1) * 100) / 100

    const fv = installmentValue * (((Math.pow(1 + equivalentRate, time)) - 1) / equivalentRate)
    return parseFloat(fv.toFixed(2))
  }
}
