
const auth = () => async (req, res, next) => {
  // console.log(req);
  next();
};

module.exports = auth;
