import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

import * as S from './styles'

export default function TextField ({
  label,
  labelFor,
  message,
  onInput,
  placeholder,
  maskType,
  ...rest
}) {
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

  return (
    <div className={S.wrapper}>
      <label htmlFor={labelFor} className={S.label}>{label}</label>

      {!maskType && (
        <input
          id={labelFor}
          className={S.input}
          onChange={onInput}
          placeholder={placeholder}
          {...rest}
        />
      )}

      {!!maskType && (
        <NumberFormat
          id={labelFor}
          className={S.input}
          onChange={onInput}
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
  onInput: PropTypes.func
}
