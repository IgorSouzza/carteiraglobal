import * as S from './styles'

import TextField from '../TextField'

export default function BasicDataForm () {
  return (
    <form className={S.wrapper}>
      <TextField
        label="Investimento Inicial:"
        labelFor="initialInvestment"
        message="Quanto você já economizou até hoje?"
      />
      <TextField
        label="Valor da Parcela:"
        labelFor="installmentValue"
        message="Quanto você pretende poupar por mês?"
      />
      <TextField
        label="Período (em meses):"
        labelFor="time"
        message="Durante quantos meses você pretende poupar?"
      />
      <TextField
        label="Taxa de Juros (em % a.a.):"
        labelFor="interestRate"
        message="Qual a taxa de juros à qual o seu dinheiro vai render por ano?"
      />
    </form>
  )
}
