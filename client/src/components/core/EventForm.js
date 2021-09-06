import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../../action';
import { Container, Row, Col } from 'react-bootstrap';

const EventForm = (props) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [eventText, seteventText] = useState('');
  const [image, setImage] = useState(null);
  const setImgToUpload = (evt) => {
    setImgUrl(URL.createObjectURL(evt.target.files[0]));
    setImage(evt.target.files[0]);
  }
  const onChangeText = (evt) => {
    seteventText(evt.target.value);
  }
  const addEvent = () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('text', eventText);
    props.addEvent(formData)
    setImgUrl(null);
    seteventText('');
    setImage(null);
  }
  return (
    <Container>
      <Row>
        <button className="btn-register" onClick={addEvent}>Regsiter Now</button>
      </Row>
      <Row>
        <Col>
          <div>
            <label htmlFor="upload-button">
              {imgUrl ? (
                <img className="img-upload" src={imgUrl}/>
              ):(
                <div className="img-upload"/>
              )}
            </label>
            <input type="file" id="upload-button" style={{ display: "none" }} onChange={setImgToUpload}/>
          </div>
        </Col>
        <Col>
          <textarea className="input-textarea" value={eventText} onChange={onChangeText} />
        </Col>
      </Row>
    </Container>
    
  )
}

export default connect ( null, { addEvent: addEvent }) (EventForm);