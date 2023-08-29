import React from 'react'
type statusProps = {
  status: 'loading' | 'success' | 'error'
}
export const Status: React.FC<statusProps> = ({ status }) => {
  let message = ""
  if (status === 'loading') {
    message = 'Loading...'
  }
  else if (status === 'success') {
    message = "Data fetched successfully"
  }
  else if (status === 'error') {
    message = "Error fetching data"
  }
  return (
    <>
      <h2>status- {message}</h2>
    </>
  )
}

