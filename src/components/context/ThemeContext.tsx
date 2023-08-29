import { createContext } from "react"
import { theme } from '../dummydata'
import { createContextType } from "../type"
export const themeCon = createContext(theme)
export const ThemeContext: React.FC<createContextType> = ({ children }) => {
    return <themeCon.Provider value={theme}>{children}</themeCon.Provider>
}
