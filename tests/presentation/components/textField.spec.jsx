import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from '../../../src/presentation/components/TextField'

const makeSut = ({
  label,
  labelFor,
  message,
  onChange,
  maskType
}) => {
  render(
    <TextField
      label={label}
      labelFor={labelFor}
      message={message}
      onInput={onChange}
      maskType={maskType}
    />
  )
}

describe('<TextField />', () => {
  it('should render with label', () => {
    makeSut({ label: 'Investimento inicial', labelFor: 'field' })

    const input = screen.getByLabelText(/investimento inicial/i)

    expect(input).toBeInTheDocument()
  })

  it('should render without label', () => {
    makeSut({})

    const input = screen.queryByLabelText(/investimento inicial/i)

    expect(input).not.toBeInTheDocument()
  })

  it('should changes its value when typing', async () => {
    const onChange = jest.fn()
    makeSut({ label: 'Investimento inicial', labelFor: 'field', onChange })

    const input = screen.getByLabelText(/investimento inicial/i)
    const text = 'This is my new text!'
    await userEvent.type(input, text)

    await waitFor(() => input.nodeValue)

    expect(input).toHaveValue(text)
    expect(onChange).toHaveBeenCalledTimes(text.length)
  })

  it('should add currency mask to input', async () => {
    const onChange = jest.fn()
    makeSut({
      label: 'Investimento inicial',
      labelFor: 'field',
      onChange,
      maskType: 'currency'
    })

    const input = screen.getByLabelText(/investimento inicial/i)
    const text = '500'
    await userEvent.type(input, text)

    await waitFor(() => input.nodeValue)

    expect(input).toHaveValue(`R$ ${text},00`)
  })

  it('should add percentage mask to input', async () => {
    const onChange = jest.fn()
    makeSut({
      label: 'Investimento inicial',
      labelFor: 'field',
      onChange,
      maskType: 'percentage'
    })

    const input = screen.getByLabelText(/investimento inicial/i)
    const text = '10'
    await userEvent.type(input, text)

    await waitFor(() => input.nodeValue)

    expect(input).toHaveValue(`${text}%`)
  })
})
