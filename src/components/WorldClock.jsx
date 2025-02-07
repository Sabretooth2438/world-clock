import { Container, Row, Col } from 'react-bootstrap'
import Clock from './Clock.jsx'

const WorldClock = ({ timeZones }) => {
  return (
    <Container className="mt-4">
      <Row>
        {timeZones.map((tz, index) => (
          <Col key={index} xs={12} md={6} className="mb-3">
            <div className="clock-card p-3 border rounded text-center">
              <h4>{tz}</h4>
              <Clock timeZone={tz} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default WorldClock
