import { useState, useEffect } from 'react'

export function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 3000)
  }, [])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return { item, saveItem, loading, error }
}
