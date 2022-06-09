import PropTypes from 'prop-types'

import { useAccumulatedvalue, useFinancialProjection } from '../../context'

import * as S from './styles'

import Card from '../../components/Card'
import Header from '../../components/Header'
import BasicDataForm from '../../components/BasicDataForm'
import AccumulatedValue from '../../components/Charts/AccumulatedValue'
import FinancialProjection from '../../components/Charts/FinancialProjection'

export default function Dashboard ({
  getAccumulatedValue,
  getFinancialProjection
}) {
  const { accumulatedValue } = useAccumulatedvalue()
  const { financialProjection } = useFinancialProjection()

  return (
    <div className={S.wrapper}>
      <Header />
      <div className={S.basicDataContainer}>
        <Card title="Dados Básicos:">
          <BasicDataForm
            getAccumulatedValue={getAccumulatedValue}
            getFinancialProjection={getFinancialProjection}
          />
        </Card>
      </div>
      <div className={S.resultsContainer}>
        <Card title="Participação no Valor Acumulado:">
          <AccumulatedValue accumulatedValue={accumulatedValue} />
        </Card>
        <Card title="Projeção Financeira:">
          <FinancialProjection financialProjection={financialProjection} />
        </Card>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  getAccumulatedValue: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  getFinancialProjection: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ])
}
