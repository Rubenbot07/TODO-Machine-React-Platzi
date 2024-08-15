import React from 'react'
import { useStorageListener } from '../hooks/useStorageListener'
import { Modal } from '../Modal'
import './ChangeAlert.css'

export function ChangeAlert ({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize)
  if (show) {
    return (
      <Modal>
        <div className='ChangeAlert-container'>
          <p>It seems that there have been changes in the information</p>
          <p>Do you want to synchronize the data?</p>
          <button
            onClick={() => toggleShow(false)}
          >
            Yes!
          </button>
        </div>
      </Modal>
    )
  } else {
    return null
  }
}
