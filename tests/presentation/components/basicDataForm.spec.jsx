import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import BasicDataForm from '../../../src/presentation/components/BasicDataForm'

const mockHandleSetAccumulatedValue = jest.fn()
jest.mock('../../../src/presentation/context/accumulated-value-context', () => {
  return {
    useAccumulatedvalue: () => ({
      handleSetAccumulatedValue: mockHandleSetAccumulatedValue
    })
  }
})

const mockHandleSetFinancialProjection = jest.fn()
jest.mock('../../../src/presentation/context/financial-projection-context', () => {
  return {
    useFinancialProjection: () => ({
      handleSetFinancialProjection: mockHandleSetFinancialProjection
    })
  }
})

jest.useFakeTimers()

const makeSut = ({
  getAccumulatedValue = { load: jest.fn() },
  getFinancialProjection = { load: jest.fn() }
}) => {
  render(
    <BasicDataForm
      getAccumulatedValue={getAccumulatedValue}
      getFinancialProjection={getFinancialProjection}
    />
  )

  return { getAccumulatedValue, getFinancialProjection }
}

describe('<BasicDataForm />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly all inputs', () => {
    makeSut({})

    const initialInvestmentInput = screen.getByLabelText(/investimento inicial/i)
    const installmentValueInput = screen.getByLabelText(/valor da parcela/i)
    const timeInput = screen.getByLabelText(/período/i)
    const interestRateInput = screen.getByLabelText(/taxa de juros/i)

    expect(initialInvestmentInput).toBeInTheDocument()
    expect(installmentValueInput).toBeInTheDocument()
    expect(timeInput).toBeInTheDocument()
    expect(interestRateInput).toBeInTheDocument()
  })

  it('should not call getAccumulatedValue and getFinancialProjection when some field is not filled', async () => {
    const getAccumulatedValue = { load: jest.fn() }
    const getFinancialProjection = { load: jest.fn() }
    makeSut({ getAccumulatedValue, getFinancialProjection })

    const initialInvestmentInput = screen.getByLabelText(/investimento inicial/i)
    const installmentValueInput = screen.getByLabelText(/valor da parcela/i)
    const timeInput = screen.getByLabelText(/período/i)

    await waitFor(() => {
      fireEvent.change(initialInvestmentInput, { target: { value: 10 } })
      fireEvent.change(installmentValueInput, { target: { value: 20 } })
      fireEvent.change(timeInput, { target: { value: 30 } })
    })

    await waitFor(() => {
      expect(getAccumulatedValue.load).not.toHaveBeenCalled()
      expect(getFinancialProjection.load).not.toHaveBeenCalled()
      expect(mockHandleSetAccumulatedValue).not.toHaveBeenCalled()
      expect(mockHandleSetFinancialProjection).not.toHaveBeenCalled()
    })
  })

  it('should call getAccumulatedValue and getFinancialProjection when all fields is filled', async () => {
    const getAccumulatedValue = {
      load: jest.fn().mockResolvedValue({ getAccumulatedValue: {} })
    }
    const getFinancialProjection = {
      load: jest.fn().mockResolvedValue({ getFinancialProjection: {} })
    }
    makeSut({ getAccumulatedValue, getFinancialProjection })

    const initialInvestmentInput = screen.getByLabelText(/investimento inicial/i)
    const installmentValueInput = screen.getByLabelText(/valor da parcela/i)
    const timeInput = screen.getByLabelText(/período/i)
    const interestRateInput = screen.getByLabelText(/taxa de juros/i)

    await waitFor(() => {
      fireEvent.change(initialInvestmentInput, { target: { value: 10 } })
      fireEvent.change(installmentValueInput, { target: { value: 20 } })
      fireEvent.change(timeInput, { target: { value: 30 } })
      fireEvent.change(interestRateInput, { target: { value: 22 } })
      jest.advanceTimersByTime(600)
    })

    await waitFor(() => {
      expect(getAccumulatedValue.load).toHaveBeenCalledTimes(1)
      expect(getFinancialProjection.load).toHaveBeenCalledTimes(1)
      expect(mockHandleSetAccumulatedValue).toHaveBeenCalledTimes(1)
      expect(mockHandleSetFinancialProjection).toHaveBeenCalledTimes(1)
    })
  })
})
