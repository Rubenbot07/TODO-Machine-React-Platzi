import { useEffect, useReducer } from 'react'

export function useLocalStorage (itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }))

  const { item, loading, error, synchronizeItem } = state

  const onError = (error) => {
    dispatch({ type: 'error', payload: error })
  }

  const onSuccess = () => {
    dispatch({ type: 'onSuccess' })
  }

  const onSetItem = (item) => {
    dispatch({ type: 'save', payload: item })
  }

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem)
          onSetItem(parsedItem)
        } else {
          localStorage.setItem('TODOS_V1', JSON.stringify(initialValue))
          parsedItem = initialValue
        }
        onSuccess()
      } catch (error) {
        onError(error)
      }
    }, 3000)
  }, [synchronizeItem])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    onSetItem(newItem)
  }

  const synchronize = () => {
    dispatch({ type: 'synchronize' })
  }

  return { item, saveItem, loading, error, synchronize }
}

const initialState = ({ initialValue }) => {
  return (
    {
      item: initialValue,
      loading: true,
      error: false,
      synchronizeItem: true
    }
  )
}

function reducer (state, action) {
  switch (action.type) {
    case 'save':
      return {
        ...state,
        item: action.payload
      }
    case 'onSuccess':
      return {
        ...state,
        loading: false,
        synchronizeItem: true
      }

    case 'synchronize':
      return {
        ...state,
        synchronizeItem: false,
        loading: true
      }
    case 'error':
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}
