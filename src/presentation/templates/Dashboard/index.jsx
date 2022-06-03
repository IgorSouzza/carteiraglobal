import * as S from './styles'

import Card from '../../components/Card'
import Header from '../../components/Header'
import BasicDataForm from '../../components/BasicDataForm'

export default function Dashboard () {
  return (
    <div className={S.wrapper}>
      <Header />
      <Card title="Dados Básicos:" customClass="mt-8">
        <BasicDataForm />
      </Card>
    </div>
  )
}
