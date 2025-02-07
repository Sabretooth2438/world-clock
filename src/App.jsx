import './App.css'
import WorldClock from './components/WorldClock.jsx'

const timeZones = [
  "UTC",
  "Asia/Bahrain",
  "America/New_York",
  "Europe/London",
  "Asia/Tokyo"
]

const App = () => (
  <div>
    <h1>World Clock</h1>
    <WorldClock timeZones={timeZones} />
  </div>
)

export default App
