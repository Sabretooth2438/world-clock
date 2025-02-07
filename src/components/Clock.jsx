import { useState, useEffect } from 'react'

const Clock = ({ timeZone }) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timerId)
  }, [])

  return (
    <h2>
      {timeZone}: {date.toLocaleString('en-US', { timeZone })}
    </h2>
  )
}

export default Clock
