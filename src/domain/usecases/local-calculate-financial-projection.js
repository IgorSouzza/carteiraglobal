/** Class responsable to contain methods to create
 *  a array of data with values from month to month
 */
export class LocalCalculateFinancialProjection {
  interestCalculator = null
  futureValueCalculator = null
  compoundInterestCalculator = null
  invested = []
  acummulated = []

  /**
   * @param {LocalCalculateInterest} interestCalculator
   * @param {LocalCalculateFutureValue} futureValueCalculator
   * @param {LocalCalculateCompoundInterest} compoundInterestCalculator
   */
  constructor (
    interestCalculator,
    futureValueCalculator,
    compoundInterestCalculator
  ) {
    this.interestCalculator = interestCalculator
    this.futureValueCalculator = futureValueCalculator
    this.compoundInterestCalculator = compoundInterestCalculator
  }

  /**
   *
   * @param {Object} props - Properties to create Financial Projection
   * @param {number} props.time - Time in months
   * @param {number} props.initialInvestment - Initial Investment
   * @param {number} props.installmentValue - The amount that is added monthly
   * @param {number} props.interestRate - Interest rate
   * @returns {number}
   */
  calculate ({ time, initialInvestment, installmentValue, interestRate }) {
    if (
      typeof time === 'undefined' ||
      typeof initialInvestment === 'undefined' ||
      typeof installmentValue === 'undefined' ||
      typeof interestRate === 'undefined'
    ) {
      throw new Error('All fields is required')
    }

    for (let currentMonth = 0; currentMonth <= time; currentMonth++) {
      const invested = (currentMonth * installmentValue) + initialInvestment

      const interest = this.#calculateAccumulated({
        invested,
        currentMonth,
        initialInvestment,
        installmentValue,
        interestRate
      })

      this.invested.push(invested)
      this.acummulated.push(interest)
    }

    return [
      { name: 'Investido', data: this.invested, color: '#868686' },
      { name: 'Acumulado', data: this.acummulated, color: '#09B682' }
    ]
  }

  /**
   * PRIVATE HELPER METHOD
   * @param {Object} props - Properties to create a Accumulated data array
   * @param {number} props.invested - Value in current month
   * @param {number} props.currentMonth - Current month
   * @param {number} props.initialInvestment - Initial Investment
   * @param {number} props.installmentValue - The amount that is added monthly
   * @param {number} props.interestRate - Interest rate
   * @returns {number}
   */
  #calculateAccumulated ({
    invested,
    currentMonth,
    initialInvestment,
    installmentValue,
    interestRate
  }) {
    const futureValue = this.futureValueCalculator.calculate({
      installmentValue,
      interestRate,
      time: currentMonth
    })
    const compoundInterest = this.compoundInterestCalculator.calculate({
      initialInvestment,
      interestRate,
      time: currentMonth
    })
    const total = (futureValue + compoundInterest) + invested
    const interest = this.interestCalculator.calculate({
      total,
      installmentValue,
      initialInvestment,
      time: currentMonth
    })

    return interest
  }
}
