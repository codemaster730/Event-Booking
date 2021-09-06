import Joi from 'joi';
module.exports.authValidation = require('./auth.validation');
module.exports.userValidation = require('./user.validation');
// module.exports.validate : (schema) => {
//     return (req, res, next) => {
//         const result = Joi.validate(req.body, schema);
//         if( result.error ) {
//             return res.status(400).json({
//                 err: result.error.details
//             })
//         }else {
//             if(!req.value) {
//                 req.value = {}
//               }
//               req.value['body'] = result.value;
//               next();
//             }
//         }
//     }
// }