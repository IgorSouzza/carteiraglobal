import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const FinancialProjectionContext = createContext({})

export function FinancialProjectionProvider ({ children }) {
  const [financialProjection, setFinancialProjection] = useState([
    { name: 'Investido', color: '#868686', data: [] },
    { name: 'Acumulado', color: '#09B682', data: [] }
  ])

  function handleSetFinancialProjection (response) {
    const formattedObject = [
      { ...response.accumulated },
      { ...response.invested }
    ]
    setFinancialProjection(formattedObject)
  }

  return (
    <FinancialProjectionContext.Provider value={{
      financialProjection,
      handleSetFinancialProjection
    }}>
      {children}
    </FinancialProjectionContext.Provider>
  )
}

export const useFinancialProjection = () => useContext(FinancialProjectionContext)

FinancialProjectionProvider.propTypes = {
  children: PropTypes.node
}
