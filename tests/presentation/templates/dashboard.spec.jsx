import { screen, render } from '@testing-library/react'

import Dashboard from '../../../src/presentation/templates/Dashboard'

jest.mock('../../../src/presentation/components/BasicDataForm', () => {
  return {
    __esModule: true,
    default: function Mock () {
      return <div data-testid="basic-data-form"></div>
    }
  }
})
jest.mock('../../../src/presentation/components/Charts/AccumulatedValue', () => {
  return {
    __esModule: true,
    default: function Mock () {
      return <div data-testid="accumulated-value"></div>
    }
  }
})
jest.mock('../../../src/presentation/components/Charts/FinancialProjection', () => {
  return {
    __esModule: true,
    default: function Mock () {
      return <div data-testid="financial-projection"></div>
    }
  }
})

const makeSut = () => {
  const getAccumulatedValue = jest.fn()
  const getFinancialProjection = jest.fn()

  render(
    <Dashboard
      getAccumulatedValue={getAccumulatedValue}
      getFinancialProjection={getFinancialProjection}
    />
  )
}

describe('<Dashboard />', () => {
  it('should render all components correctly', () => {
    makeSut()

    const basicDataForm = screen.getByTestId('basic-data-form')
    const accumulatedValue = screen.getByTestId('accumulated-value')
    const financialProjection = screen.getByTestId('financial-projection')

    expect(basicDataForm).toBeInTheDocument()
    expect(accumulatedValue).toBeInTheDocument()
    expect(financialProjection).toBeInTheDocument()
  })
})
