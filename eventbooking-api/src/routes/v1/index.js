const express = require('express');
const eventRoute = require('./event.route');

const router = express.Router();

const defaultRoutes = [

  {
    path: '/event',
    route: eventRoute
  }
];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
