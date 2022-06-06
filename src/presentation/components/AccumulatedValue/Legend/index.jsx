import PropTypes from 'prop-types'

export default function Legend ({ color, title, value, percentage }) {
  return (
    <div className="flex items-center justify-between mb-4 last:mb-0">
      <div className="flex items-center">
        <div className="w-2.5 h-2.5 rounded-sm mr-4" style={{ background: color }} />
        <div>
          <h3 className="text-xs text-carteira-global-black">{title}</h3>
          <span className="text-xs text-carteira-global-gray-medium">{value}</span>
        </div>
      </div>
      <span className="text-xs text-carteira-global-black">{percentage}%</span>
    </div>
  )
}

Legend.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  percentage: PropTypes.number
}
