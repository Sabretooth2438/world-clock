import { useState, useEffect } from 'react'

const Clock = ({ timeZone }) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timerId)
  }, [])

  let formattedTime
  try {
    formattedTime = date.toLocaleString('en-US', { timeZone })
  } catch (error) {
    formattedTime = 'Invalid Time Zone'
  }

  return (
    <p style={{ color: 'white', fontSize: '1.2rem', margin: '10px 0' }}>
      {formattedTime}
    </p>
  )
}

export default Clock
