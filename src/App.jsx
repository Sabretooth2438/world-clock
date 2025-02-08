import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WorldClock from './components/WorldClock.jsx'

const timeZones = [
  { city: "Coordinated Universal Time", zone: "UTC" },
  { city: "Manama", zone: "Asia/Bahrain" },
  { city: "New York", zone: "America/New_York" },
  { city: "London", zone: "Europe/London" },
  { city: "Tokyo", zone: "Asia/Tokyo" }
]

const App = () => (
  <div>
    <h1>World Clock</h1>
    <WorldClock timeZones={timeZones} />
  </div>
)

export default App
