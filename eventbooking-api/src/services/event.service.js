const httpStatus = require('http-status');
const { Event } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Event
 * @param {Object} eventBody
 * @returns {Promise<Event>}
 */
const createEvent = async (eventBody) => {
  const event = await Event.create(eventBody);
  return event;
};

/**
 * Query for Events
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryEvents = async () => {
  const Events = Event.find();
  return Events;
};

/**
 * Get Event by id
 * @param {ObjectId} id
 * @returns {Promise<Event>}
 */
const getEventById = async (id) => {
  return Event.findById(id);
};

/**
 * Get Event by email
 * @param {string} email
 * @returns {Promise<Event>}
 */
// const getEventByEmail = async (email) => {
//   return Event.findOne({ email });
// };

/**
 * Update Event by id
 * @param {ObjectId} EventId
 * @param {Object} updateBody
 * @returns {Promise<Event>}
 */
const updateEventById = async (EventId, updateBody) => {
  const Event = await getEventById(EventId);
  if (!Event) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Event not found');
  }
  if (await Event.isStandardTaken(updateBody.standard, updateBody._id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Standard already taken');
  }
  Object.assign(Event, updateBody);
  await Event.save();
  return Event;
};

/**
 * Delete Event by id
 * @param {ObjectId} EventId
 * @returns {Promise<Event>}
 */
const deleteEventById = async (EventId) => {
  const Event = await getEventById(EventId);
  if (!Event) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Event not found');
  }
  await Event.remove();
  return Event;
};

module.exports = {
  createEvent,
  queryEvents,
//   getEventById,
//   getEventByEmail,
  updateEventById,
  deleteEventById,
};
