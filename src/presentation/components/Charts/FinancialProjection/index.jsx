import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PropTypes from 'prop-types'

import { makeOptions } from './options'

export default function FinancialProjection ({ financialProjection }) {
  return (
    <div data-testid="chart-container">
      <HighchartsReact
        highcharts={Highcharts}
        options={makeOptions(financialProjection)}
      />
    </div>
  )
}

FinancialProjection.propTypes = {
  financialProjection: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.number)
  }))
}
