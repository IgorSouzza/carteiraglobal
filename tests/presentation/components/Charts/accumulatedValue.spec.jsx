import { render, screen } from '@testing-library/react'

import { accumulatedValueMock } from '../../mocks'

import AccumulatedValue from '../../../../src/presentation/components/Charts/AccumulatedValue'

const makeSut = () => {
  render(<AccumulatedValue accumulatedValue={accumulatedValueMock} />)
}

describe('<AccumulatedValue />', () => {
  it('should render chart correctly', () => {
    makeSut()

    const chart = screen.getByTestId('chart-container')

    expect(chart).toBeInTheDocument()
    expect(chart.firstChild).toHaveAttribute('data-highcharts-chart')
  })

  it('should render chart legend', () => {
    makeSut()

    const legendContainer = screen.getByTestId('legend-container')

    expect(legendContainer).toBeInTheDocument()
    expect(legendContainer.childNodes).toHaveLength(3)
  })
})
