import Card from '../../components/Card'
import Header from '../../components/Header'

import * as S from './styles'

export default function Dashboard () {
  return (
    <div className={S.wrapper}>
      <Header />
      <Card title="Dados Básicos:" customClass="mt-8">
        <input type="text" />
      </Card>
    </div>
  )
}
