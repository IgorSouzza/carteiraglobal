import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PropTypes from 'prop-types'

import * as S from './styles'
import { makeOptions } from './options'

import Card from '../../Card'
import Portal from '../../Portal'
import Legend from './Legend'

export default function AccumulatedValue ({ accumulatedValue }) {
  return (
    <>
      <div data-testid="chart-container">
        <HighchartsReact highcharts={Highcharts} options={makeOptions(accumulatedValue.data)} />
      </div>
      <Portal wrapperId="chart-portal-wrapper">
        <Card customClass={S.card} circleVariant>
          <div className={S.accumulatedContainer}>
            <p className={S.accumulatedTitle}>Valor Acumulado</p>
            <span className={S.accumulatedValue}>{accumulatedValue.total || 'R$ 0,00'}</span>
          </div>
          <div className={S.savedContainer}>
            <p className={S.savedTitle}>Você terá poupado:</p>
            <span className={S.savedValue}>{accumulatedValue.saved || 'R$ 0,00'}</span>
          </div>
        </Card>
      </Portal>
      <div className={S.legendContainer} data-testid="legend-container">
        {accumulatedValue.data.map((item) => (
          <Legend
            key={item.name}
            color={item.color}
            title={item.name}
            value={item.value}
            percent={item.percentLabel}
          />
        ))}
      </div>
    </>
  )
}

AccumulatedValue.propTypes = {
  accumulatedValue: PropTypes.shape({
    total: PropTypes.string,
    saved: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
      value: PropTypes.string,
      percentLabel: PropTypes.string
    }))
  })
}
