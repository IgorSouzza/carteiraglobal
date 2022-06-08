import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PropTypes from 'prop-types'

import * as S from './styles'
import { makeOptions } from './options'

export default function FinancialProjection ({ financialProjection }) {
  return (
    <div data-testid="chart-container">
      {!financialProjection.length && (
        <p className={S.noData}>
          Sem dados para mostrar
        </p>
      )}
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
