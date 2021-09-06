import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { getEvents } from '../action';
import { ListGroup } from 'react-bootstrap';

import './styles/eventList.styles.scss';

const EventView = lazy(() => import('./core/EventView'))
const EventList = (props) => {
  useEffect(()=>{
    store.dispatch(getEvents());
  }, [])
  return (
    <ListGroup horizontal className="events-list">
      <Suspense fallback={<div>Loading...</div>}>
        {
          props.events.map((item, i) => 
            <ListGroup.Item className="event-item">
              <EventView image={item.image} text={item.text} key={i}/>
            </ListGroup.Item>
          )
        }
      </Suspense>
    </ListGroup>
  )
}

const mapStateToProps = state => ({
  events: state.event.events
})
export default connect ( mapStateToProps ) (EventList);