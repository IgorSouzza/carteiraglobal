import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const FinancialProjectionContext = createContext({})

export function FinancialProjectionProvider ({ children }) {
  const [financialProjection, setFinancialProjection] = useState([])

  function handleSetFinancialProjection (response) {
    const formattedObject = [
      { ...response.invested },
      { ...response.accumulated }
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
