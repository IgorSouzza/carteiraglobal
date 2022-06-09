export class LocalCalculateAccumulatedValue {
  interestCalculator = null
  futureValueCalculator = null
  compoundInterestCalculator = null

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
   * @param {Object} props - Properties to calculate Accumulated Value
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

    const monthlyAccumulated = installmentValue * time

    const compoundInterest = this.compoundInterestCalculator.calculate({
      initialInvestment,
      time,
      interestRate
    })

    const futureValue = this.futureValueCalculator.calculate({
      installmentValue,
      time,
      interestRate
    })

    const total = futureValue + compoundInterest

    const interest = this.interestCalculator.calculate({
      total,
      initialInvestment,
      installmentValue,
      time
    })

    const interestPercent = (interest / total) * 100
    const initialInvestmentPercent = (initialInvestment / total) * 100
    const monthlyAccumulatedPercent = (monthlyAccumulated / total) * 100
    const saved = (total - interest).toFixed(2)

    return {
      futureValue,
      compoundInterest,
      saved,
      monthlyAccumulated: {
        value: monthlyAccumulated,
        percent: monthlyAccumulatedPercent
      },
      initialInvestment: {
        value: initialInvestment.toFixed(2),
        percent: initialInvestmentPercent
      },
      interest: {
        value: interest,
        percent: interestPercent
      },
      total: total.toFixed(2)
    }
  }
}
