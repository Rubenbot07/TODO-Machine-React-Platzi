import React from 'react'
import { withStorageListener } from './withStorageListener'
import { Modal } from '../Modal'
import './ChangeAlert.css'

function ChangeAlert ({ show, toggleShow }) {
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

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
