import { render, screen } from '@testing-library/react'

import BasicDataForm from '../../../src/presentation/components/BasicDataForm'

describe('<BasicDataForm />', () => {
  it('should render correctly all inputs', () => {
    render(<BasicDataForm />)

    const initialInvestmentInput = screen.getByLabelText(/investimento inicial/i)
    const installmentValueInput = screen.getByLabelText(/valor da parcela/i)
    const timeInput = screen.getByLabelText(/período/i)
    const interestRateInput = screen.getByLabelText(/taxa de juros/i)

    expect(initialInvestmentInput).toBeInTheDocument()
    expect(installmentValueInput).toBeInTheDocument()
    expect(timeInput).toBeInTheDocument()
    expect(interestRateInput).toBeInTheDocument()
  })
})
