import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import * as S from './styles'
import { makeOptions } from './options'

import Card from '../Card'
import Portal from '../Portal'
import Legend from './Legend'

export default function AccumulatedValue () {
  const data = [
    { name: 'Investimento Mensal Acumulado', value: 'R$ 120.000,00', y: 53.73, sliced: true, selected: true, color: '#21A3ED' },
    { name: 'Juros', value: 'R$ 83.302,77', y: 37.30, sliced: true, selected: true, color: '#09B682' },
    { name: 'Investimento Inicial', value: 'R$ 20.000,00', y: 8.96, sliced: true, selected: true, color: '#7B1CF3' }
  ]

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={makeOptions(data)} />
      <Portal wrapperId="chart-portal-wrapper">
        <Card customClass={S.card} circleVariant>
          <div className={S.accumulatedContainer}>
            <p className={S.accumulatedTitle}>Valor Acumulado</p>
            <span className={S.accumulatedValue}>R$ 220.300,50</span>
          </div>
          <div className={S.savedContainer}>
            <p className={S.savedTitle}>Você terá poupado:</p>
            <span className={S.savedValue}>R$ 130.00,00</span>
          </div>
        </Card>
      </Portal>
      <div className={S.legendContainer}>
        {data.map((item) => (
          <Legend
            key={item.name}
            color={item.color}
            title={item.name}
            value={item.value}
            percentage={item.y}
          />
        ))}
      </div>
    </>
  )
}
