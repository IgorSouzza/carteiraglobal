/**
 * Format a number to percent string
 * @param {number} value - number to be formated
 * @returns
 */
export function formatToPercent (value) {
  return value.toLocaleString('pt-br', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

/**
 * Format a number to currency string
 * @param {number | bigint} value - number to be formated
 * @returns
 */
export function formatToCurrency (value) {
  const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  return formatter.format(value)
}
