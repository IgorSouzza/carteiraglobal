import PropTypes from 'prop-types'

import * as S from './styles'

export default function TextField ({
  label,
  labelFor,
  message,
  onInput,
  ...rest
}) {
  return (
    <div className={S.wrapper}>
      <label htmlFor={labelFor} className={S.label}>{label}</label>
      <input
        id={labelFor}
        className={S.input}
        onChange={onInput}
        {...rest}
      />
      <span className={S.message}>{message}</span>
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  labelFor: PropTypes.string,
  message: PropTypes.string,
  onInput: PropTypes.func
}
