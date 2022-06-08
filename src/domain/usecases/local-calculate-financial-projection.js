export class LocalCalculateFinancialProjection {
  interestCalculator = null
  futureValueCalculator = null
  compoundInterestCalculator = null
  invested = []
  acummulated = []

  constructor (
    interestCalculator,
    futureValueCalculator,
    compoundInterestCalculator
  ) {
    this.interestCalculator = interestCalculator
    this.futureValueCalculator = futureValueCalculator
    this.compoundInterestCalculator = compoundInterestCalculator
  }

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
