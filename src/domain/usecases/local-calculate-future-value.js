export class LocalCalculateFutureValue {
  constructor () {}

  calculate ({ installmentValue, time, interestRate }) {
    if (!installmentValue || !time || !interestRate) {
      throw new Error('All fields is required')
    }

    const equivalentRate =
      ((Math.pow(1 + interestRate / 100, 1 / 12) - 1) * 100) / 100

    const fv = installmentValue * (((Math.pow(1 + equivalentRate, time)) - 1) / equivalentRate)
    return fv.toFixed(2).toString()
  }
}
