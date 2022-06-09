import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

import { useDebounce } from '../../hooks'

import * as S from './styles'

export default function TextField ({
  label,
  labelFor,
  message,
  onInput,
  placeholder,
  maskType,
  debounceDelay = 0,
  ...rest
}) {
  const debouncedChange = useDebounce(onInput, debounceDelay)

  const maskProps = {
    currency: {
      thousandSeparator: '.',
      decimalSeparator: ',',
      decimalScale: 2,
      prefix: 'R$ ',
      fixedDecimalScale: true
    },
    percentage: {
      suffix: '%'
    }
  }

  function handleChange (value) {
    debouncedChange(value)
  }

  return (
    <div className={S.wrapper}>
      <label htmlFor={labelFor} className={S.label}>{label}</label>

      {!maskType && (
        <input
          id={labelFor}
          className={S.input}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          {...rest}
        />
      )}

      {!!maskType && (
        <NumberFormat
          id={labelFor}
          className={S.input}
          onValueChange={(value) => handleChange(value.floatValue)}
          placeholder={placeholder}
          allowNegative={false}
          {...maskProps[maskType]}
          {...rest}
        />
      )}

      <span className={S.message}>{message}</span>
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  labelFor: PropTypes.string,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  maskType: PropTypes.string,
  onInput: PropTypes.func,
  debounceDelay: PropTypes.number
}
