import { Provider } from "react-redux"
import { store } from ".."
import { ReactNode } from "react"

interface StoreProviderProps {
  children?: ReactNode
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {children} = props
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}