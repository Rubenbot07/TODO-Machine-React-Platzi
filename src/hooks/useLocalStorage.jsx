import { useState, useEffect } from 'react'

export function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [synchronizeItem, setSynchronizeItem] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
          setLoading(false)
        } else {
          localStorage.setItem('TODOS_V1', JSON.stringify(initialValue))
          parsedItem = initialValue
          setLoading(false)
        }
        setSynchronizeItem(true)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 3000)
  }, [synchronizeItem])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  const synchronize = () => {
    setLoading(true)
    setSynchronizeItem(false)
  }

  return { item, saveItem, loading, error, synchronize }
}
