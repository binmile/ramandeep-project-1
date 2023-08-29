import { useContext } from "react"
import { firstname } from "./CompA"
export const CompB: React.FC = () => {
  const first = useContext(firstname)
  return (
    <>
      <h2>username:{first.name}</h2>
      <h2>email: {first.email}</h2>
    </>
  )
}

