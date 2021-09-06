import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/eventcard.styles.scss';
const base_url = "http://localhost:3000"
const EventView = (props) => {
  const [readMore, setReadMore] = useState(false);
  const setReadWay = () => {
    setReadMore(!readMore);
  }
  return (
    <Card>
      <Card.Body>
        <Container className="event-container">
          <Row>
            <Col>
              <img className="img-event" src={`${base_url}/${props.image}`}/>
            </Col>
            <Col>
              <div className={readMore ? 'text-event': 'text-event-min'}>
                {props.text}
              </div>
              <div className="btn-readmore" onClick={setReadWay}>
                { readMore ? 'read less...' : 'read more...'}
              </div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default EventView;