import { useState } from 'react'

export function useStorageListener (synchronize) {
  const [storageChange, setStorageChange] = useState(false)

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      console.log('there was changes')
      setStorageChange(true)
    }
  })

  const toggleShow = () => {
    synchronize()
    setStorageChange(false)
  }

  return {
    show: storageChange,
    toggleShow
  }
}
