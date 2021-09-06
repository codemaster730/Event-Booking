const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
    image: {
      type: String,

    },
    text: {
      type: String,
      required: true
    }
  }
);

 /**
 * @typedef Event
 */
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
