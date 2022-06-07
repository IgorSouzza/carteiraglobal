import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useAccumulatedvalue } from '../../context'
import { makeAccumulatedValueQuery } from '../../queries'

import * as S from './styles'

import TextField from '../TextField'

export default function BasicDataForm ({ getAccumulatedValue }) {
  const [initialInvestment, setInitialInvestment] = useState()
  const [installmentValue, setInstallmentValue] = useState()
  const [time, setTime] = useState()
  const [interestRate, setInterestRate] = useState()
  const { handleSetAccumulatedValue } = useAccumulatedvalue()

  async function handleSubmit () {
    if (!initialInvestment || !installmentValue || !time || !interestRate) {
      return
    }

    try {
      const response = await getAccumulatedValue.load({
        query: makeAccumulatedValueQuery({
          initialInvestment,
          installmentValue,
          time,
          interestRate
        })
      })
      handleSetAccumulatedValue(response.getAccumulatedValue)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [initialInvestment, installmentValue, time, interestRate])

  return (
    <form className={S.wrapper}>
      <TextField
        label="Investimento Inicial:"
        labelFor="initialInvestment"
        placeholder="R$ 500,00"
        maskType="currency"
        message="Quanto você já economizou até hoje?"
        onInput={(e) => setInitialInvestment(e.floatValue)}
      />
      <TextField
        label="Valor da Parcela:"
        labelFor="installmentValue"
        placeholder="R$ 100,00"
        maskType="currency"
        message="Quanto você pretende poupar por mês?"
        onInput={(e) => setInstallmentValue(e.floatValue)}
      />
      <TextField
        label="Período (em meses):"
        labelFor="time"
        placeholder="12"
        maskType="number"
        message="Durante quantos meses você pretende poupar?"
        onInput={(e) => setTime(e.floatValue)}
      />
      <TextField
        label="Taxa de Juros (em % a.a.):"
        labelFor="interestRate"
        placeholder="8%"
        maskType="percentage"
        message="Qual a taxa de juros à qual o seu dinheiro vai render por ano?"
        onInput={(e) => setInterestRate(e.floatValue)}
      />
    </form>
  )
}

BasicDataForm.propTypes = {
  getAccumulatedValue: PropTypes.object
}
