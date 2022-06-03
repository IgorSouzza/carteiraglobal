import PropTypes from 'prop-types'

import * as S from './styles'

export default function Card ({ title, customClass = '', children }) {
  return (
    <div className={`${S.wrapper} ${customClass}`}>
      <h2 className={S.title}>{title}</h2>
      <div className={S.childrenContainer}>
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  customClass: PropTypes.string,
  children: PropTypes.node
}
