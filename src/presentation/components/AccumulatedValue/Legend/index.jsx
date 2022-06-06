import PropTypes from 'prop-types'

import * as S from './styles'

export default function Legend ({ color, title, value, percentage }) {
  return (
    <div className={S.wrapper}>
      <div className={S.titleContainer}>
        <div className={S.coloredSquare} style={{ background: color }} />
        <div>
          <h3 className={S.title}>{title}</h3>
          <span className={S.value}>{value}</span>
        </div>
      </div>
      <span className={S.percetage}>{percentage}%</span>
    </div>
  )
}

Legend.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  percentage: PropTypes.number
}
