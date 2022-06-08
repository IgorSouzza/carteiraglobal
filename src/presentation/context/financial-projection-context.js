import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const FinancialProjectionContext = createContext({})

export function FinancialProjectionProvider ({ children }) {
  const [financialProjection, setFinancialProjection] = useState({ data: [] })

  return (
    <FinancialProjectionContext.Provider value={{
      financialProjection,
      setFinancialProjection
    }}>
      {children}
    </FinancialProjectionContext.Provider>
  )
}

export const useFinancialProjection = () => useContext(FinancialProjectionContext)

FinancialProjectionProvider.propTypes = {
  children: PropTypes.node
}
