import * as S from './styles'

import Card from '../../components/Card'
import Header from '../../components/Header'
import BasicDataForm from '../../components/BasicDataForm'
import AccumulatedValue from '../../components/AccumulatedValue'

export default function Dashboard () {
  return (
    <div className={S.wrapper}>
      <Header />
      <div className={S.basicDataContainer}>
        <Card title="Dados Básicos:">
          <BasicDataForm />
        </Card>
      </div>
      <div className={S.resultsContainer}>
        <Card title="Participação no Valor Acumulado:">
          <AccumulatedValue />
        </Card>
      </div>
    </div>
  )
}
