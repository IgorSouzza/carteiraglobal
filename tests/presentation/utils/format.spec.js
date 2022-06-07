import { formatToPercent, formatToCurrency } from '../../../src/presentation/utils'

describe('Format', () => {
  it('should return a percent value', () => {
    const sut = formatToPercent(0.5345)

    expect(sut).toBe('53,45%')
  })

  it('should return a currency value', () => {
    const sut = formatToCurrency(150000.35)

    expect(sut).toBe('R$\xa0150.000,35')
  })
})
