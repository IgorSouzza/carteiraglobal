export function formatToPercent (value) {
  return value.toLocaleString('pt-br', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export function formatToCurrency (value) {
  const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  return formatter.format(value)
}
