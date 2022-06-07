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

const makeSut = (getAccumulatedValue = { load: jest.fn() }) => {
  render(<BasicDataForm getAccumulatedValue={getAccumulatedValue} />)
}

describe('<BasicDataForm />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly all inputs', () => {
    makeSut()

    const initialInvestmentInput = screen.getByLabelText(/investimento inicial/i)
    const installmentValueInput = screen.getByLabelText(/valor da parcela/i)
    const timeInput = screen.getByLabelText(/período/i)
    const interestRateInput = screen.getByLabelText(/taxa de juros/i)

    expect(initialInvestmentInput).toBeInTheDocument()
    expect(installmentValueInput).toBeInTheDocument()
    expect(timeInput).toBeInTheDocument()
    expect(interestRateInput).toBeInTheDocument()
  })

  it('should not call getAccumulatedValue when some field is not filled', async () => {
    const getAccumulatedValueMock = { load: jest.fn() }
    makeSut(getAccumulatedValueMock)

    const initialInvestmentInput = screen.getByLabelText(/investimento inicial/i)
    const installmentValueInput = screen.getByLabelText(/valor da parcela/i)
    const timeInput = screen.getByLabelText(/período/i)

    fireEvent.input(initialInvestmentInput, { target: { value: 10 } })
    fireEvent.input(installmentValueInput, { target: { value: 20 } })
    fireEvent.input(timeInput, { target: { value: 30 } })
    await waitFor(() => initialInvestmentInput)
    await waitFor(() => installmentValueInput)
    await waitFor(() => timeInput)

    expect(getAccumulatedValueMock.load).not.toHaveBeenCalled()
    expect(mockHandleSetAccumulatedValue).not.toHaveBeenCalled()
  })

  it('should call getAccumulatedValue when all fields is filled', async () => {
    const getAccumulatedValueMock = {
      load: jest.fn().mockResolvedValue({ getAccumulatedValue: {} })
    }
    makeSut(getAccumulatedValueMock)

    const initialInvestmentInput = screen.getByLabelText(/investimento inicial/i)
    const installmentValueInput = screen.getByLabelText(/valor da parcela/i)
    const timeInput = screen.getByLabelText(/período/i)
    const interestRateInput = screen.getByLabelText(/taxa de juros/i)

    fireEvent.input(initialInvestmentInput, { target: { value: 10 } })
    fireEvent.input(installmentValueInput, { target: { value: 20 } })
    fireEvent.input(timeInput, { target: { value: 30 } })
    fireEvent.input(interestRateInput, { target: { value: 22 } })
    await waitFor(() => initialInvestmentInput)
    await waitFor(() => installmentValueInput)
    await waitFor(() => timeInput)
    await waitFor(() => interestRateInput)

    expect(getAccumulatedValueMock.load).toHaveBeenCalledTimes(1)
    expect(mockHandleSetAccumulatedValue).toHaveBeenCalledTimes(1)
  })
})
