import { createPortal } from 'react-dom'
import './Modal.css'
export function Modal ({ children }) {
  return createPortal(
    <div className='Modal-background'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}
