const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { eventService } = require('../services');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

let path = require('path');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'images');
  },
  filename: function(req, file, cb) {
      cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });

const createEvent = catchAsync(async (req, res) => {
  const newEvent = {image: req.file.filename, text: req.body.text}
  const event = await eventService.createEvent(newEvent);
  res.status(httpStatus.CREATED).send(event);
});

const getEvents = catchAsync(async (req, res) => {
  const result = await eventService.queryEvents();
  res.send(result);
});

// const getLabel = catchAsync(async (req, res) => {
//   const Label = await eventService.getLabelById(req.params.LabelId);
//   if (!Label) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Label not found');
//   }
//   res.send(Label);
// });

// const updateLabel = catchAsync(async (req, res) => {
//   const Label = await eventService.updateLabelById(req.params.labelId, req.body.label);
//   res.status(httpStatus.ACCEPTED).send(Label);
// });

// const deleteLabel = catchAsync(async (req, res) => {
//   await eventService.deleteLabelById(req.params.labelId);
//   res.status(httpStatus.NO_CONTENT).send();
// });

module.exports = {
  createEvent,
  upload,
  getEvents,
//   getLabel,
  // updateLabel,
  // deleteLabel,
};
