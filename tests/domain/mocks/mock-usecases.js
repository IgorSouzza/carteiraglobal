export class InterestSpy {
  callsCount = 0

  calculate (args) {
    this.callsCount++
    return 0
  }
}

export class CompoundInterestSpy {
  callsCount = 0

  calculate (args) {
    this.callsCount++
    return 0
  }
}

export class FutureValueSpy {
  callsCount = 0

  calculate (args) {
    this.callsCount++
    return 0
  }
}
