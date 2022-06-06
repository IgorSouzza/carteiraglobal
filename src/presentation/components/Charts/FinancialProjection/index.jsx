import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { makeOptions } from './options'

export default function FinancialProjection () {
  const fakeData = [
    { name: 'Investido', data: [1, 2, 3, 4, 5, 6, 7, 8], color: '#868686' },
    { name: 'Acumulado', data: [1, 5, 9, 13, 17, 21, 25, 29.35], color: '#09B682' }
  ]

  return (
    <>
      <div data-testid="chart-container">
        <HighchartsReact highcharts={Highcharts} options={makeOptions(fakeData)} />
      </div>
    </>
  )
}
