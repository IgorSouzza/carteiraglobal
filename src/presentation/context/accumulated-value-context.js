import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

import { formatToCurrency, formatToPercent } from '../utils'

const AccumulatedValueContext = createContext({})

export function AccumulatedvalueProvider ({ children }) {
  const [accumulatedValue, setAccumulatedValue] = useState({ data: [] })

  function handleSetAccumulatedValue (params) {
    const formattedData = {
      total: formatToCurrency(params.total),
      saved: formatToCurrency(params.saved),
      data: [
        {
          name: 'Investimento Inicial',
          value: formatToCurrency(params.initialInvestment.value),
          y: params.initialInvestment.percent,
          percentLabel: formatToPercent(params.initialInvestment.percent / 100),
          color: '#7B1CF3'
        },
        {
          name: 'Juros',
          value: formatToCurrency(params.interest.value),
          y: params.interest.percent,
          percentLabel: formatToPercent(params.interest.percent / 100),
          color: '#09B682'
        },
        {
          name: 'Investimento Mensal Acumulado',
          value: formatToCurrency(params.monthlyAccumulated.value),
          y: params.monthlyAccumulated.percent,
          percentLabel: formatToPercent(params.monthlyAccumulated.percent / 100),
          color: '#21A3ED'
        }
      ].sort((a, b) => b.y - a.y)
    }

    setAccumulatedValue(formattedData)
  }

  return (
    <AccumulatedValueContext.Provider value={{
      accumulatedValue,
      handleSetAccumulatedValue
    }}>
      {children}
    </AccumulatedValueContext.Provider>
  )
}

export const useAccumulatedvalue = () => useContext(AccumulatedValueContext)

AccumulatedvalueProvider.propTypes = {
  children: PropTypes.node
}
