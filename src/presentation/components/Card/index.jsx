import PropTypes from 'prop-types'

import * as S from './styles'

export default function Card ({ title, circleVariant = false, customClass = '', children }) {
  return (
    <div className={`${S.wrapper({ circleVariant })} ${customClass}`}>
      <h2 className={S.title}>{title}</h2>
      <div className={S.childrenContainer}>
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  circleVariant: PropTypes.bool,
  customClass: PropTypes.string,
  children: PropTypes.node
}
