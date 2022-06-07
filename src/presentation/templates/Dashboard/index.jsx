import PropTypes from 'prop-types'

import * as S from './styles'

import Card from '../../components/Card'
import Header from '../../components/Header'
import BasicDataForm from '../../components/BasicDataForm'
import AccumulatedValue from '../../components/Charts/AccumulatedValue'
import FinancialProjection from '../../components/Charts/FinancialProjection'

export default function Dashboard ({ getAccumulatedValue }) {
  return (
    <div className={S.wrapper}>
      <Header />
      <div className={S.basicDataContainer}>
        <Card title="Dados Básicos:">
          <BasicDataForm getAccumulatedValue={getAccumulatedValue} />
        </Card>
      </div>
      <div className={S.resultsContainer}>
        <Card title="Participação no Valor Acumulado:">
          <AccumulatedValue />
        </Card>
        <Card title="Projeção Financeira:">
          <FinancialProjection />
        </Card>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  getAccumulatedValue: PropTypes.object
}
