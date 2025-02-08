import { Container, Row, Col } from 'react-bootstrap'
import Clock from './Clock.jsx'

const getUtcOffset = (timeZone) => {
  try {
    const now = new Date()
    const utcOffset = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'short'
    }).formatToParts(now).find(part => part.type === 'timeZoneName')?.value

    return utcOffset.replace('UTC', '').trim() || "±0"
  } catch (error) {
    return "N/A"
  }
}

const WorldClock = ({ timeZones }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        {timeZones.map((tz, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-3">
            <div className="clock-card text-center">
              <h4 style={{ color: 'white' }}>
                {tz.city} 
                <span className="utc-offset"> (UTC{getUtcOffset(tz.zone)})</span>
              </h4>
              <Clock timeZone={tz.zone} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default WorldClock
