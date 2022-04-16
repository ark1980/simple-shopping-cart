import { createContext } from 'react'
import { data } from '../data/app-data'

export const appContext = createContext();

const AppContextProvider = ({children}) => {
  return (
    <appContext.Provider value={{data}}>
      {children}
    </appContext.Provider>
  ) 
}

export default AppContextProvider;