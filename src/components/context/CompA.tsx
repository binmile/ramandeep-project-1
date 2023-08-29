import { createContext } from 'react'
import { details } from '../dummydata'
import { CompAType, createContextType } from '../type'
export const firstname = createContext(details)
export const CompA: React.FC<createContextType> = ({ children }) => {
  return (
    <>
      <firstname.Provider value={details}>{children}</firstname.Provider>
    </>
  )
}

