import { render, screen } from '@testing-library/react'

import FinancialProjection from '../../../../src/presentation/components/Charts/FinancialProjection'

const makeSut = () => {
  render(<FinancialProjection />)
}

describe('<FinancialProjection />', () => {
  it('should render chart correctly', () => {
    makeSut()

    const chart = screen.getByTestId('chart-container')

    expect(chart).toBeInTheDocument()
    expect(chart.firstChild).toHaveAttribute('data-highcharts-chart')
  })
})
