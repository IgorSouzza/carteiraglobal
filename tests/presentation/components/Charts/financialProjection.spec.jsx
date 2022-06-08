import { render, screen } from '@testing-library/react'

import FinancialProjection from '../../../../src/presentation/components/Charts/FinancialProjection'

const makeSut = (data) => {
  render(<FinancialProjection financialProjection={data} />)
}

describe('<FinancialProjection />', () => {
  it('should render chart correctly', () => {
    makeSut([{ name: 'some_name', color: 'some_color', data: [1, 2, 3] }])

    const chart = screen.getByTestId('chart-container')

    expect(chart).toBeInTheDocument()
    expect(chart.firstChild).toHaveAttribute('data-highcharts-chart')
  })

  it('should render no-data message if data is empty', () => {
    makeSut([])
    const message = screen.getByText(/sem dados para mostrar/i)
    expect(message).toBeInTheDocument()
  })
})
