import React, { useCallback, useState } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'
const Parent: React.FC = () => {
  const [age, setAge] = useState<number>(25)
  const [salary, setSalary] = useState<number>(50000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age])
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])
  return (
    <>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>

    </>
  )
}

export default Parent

