import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { getEvents } from '../action';
import './styles/landpage.styles.scss';
import { Carousel, ListGroup } from 'react-bootstrap';
import EventView from './core/EventView';
// const EventView = lazy(() => import('./core/EventView'))
const LandPage = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(()=>{
    store.dispatch(getEvents());
  }, [])
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
         props.events.slice(0, props.events.length-1).map((item, i) => 
          <Carousel.Item key={i}>
            <ListGroup horizontal className="events-list">
              <ListGroup.Item className="event-item">
                <EventView image={props.events[i].image} text={props.events[i].text}/>
              </ListGroup.Item>
              <ListGroup.Item className="event-item">
                <EventView image={props.events[i+1].image} text={props.events[i+1].text}/>
              </ListGroup.Item>
            </ListGroup>                      
          </Carousel.Item>
        )
      }
    </Carousel>
  )
}

const mapStateToProps = state => ({
  events: state.event.events
})
export default connect ( mapStateToProps ) (LandPage);