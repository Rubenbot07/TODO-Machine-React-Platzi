import { useState, React } from 'react'

export function withStorageListener (WrappedComponent) {
  return function WrappedComponentWithStorageListener (props) {
    const [storageChange, setStorageChange] = useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('there was changes')
        setStorageChange(true)
      }
    })

    const toggleShow = () => {
      props.synchronize()
      setStorageChange(false)
    }

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}
