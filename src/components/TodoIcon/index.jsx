import CheckSvgPath from './checkSVG'
import DeleteSvgPath from './deleteSVG'
import './TodoIcon.css'

const iconTypes = {
  check: (color) => <CheckSvgPath fill={color} className='Icon-svg' />,
  delete: (color) => <DeleteSvgPath fill={color} className='Icon-svg' />
}

export function TodoIcon ({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}
