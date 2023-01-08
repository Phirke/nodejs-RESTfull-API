var db = require('../../config/db.config');

function Validate(req, res, next) {
    //Get Key from Header
    var keyToTest = req.header('API_KEY');
    //is header filled?
    if (!keyToTest) {
        console.log('An api key was missing. Access denied');
        res.statusCode = 403;
        res.send('Access denied.');
    } else {
        //is the api key from the header equal to our dotenv api key variable?
        if (keyToTest === process.env.API_KEY) {
            next();
        } else {
            res.statusCode = 403;
            res.send({ code: 403, status: false, message: 'Access denied. Api-Key is wrong.' });
        }
    }
    // db.query(
    //     `SELECT * FROM users WHERE LOWER(token) = LOWER(${db.escape(
    //       req.query.token
    //     )});`,
    //     (err, result) => {
    //         if (result.length) {
    //             next();
    //         } else {
    //             return res.send({
    //                 status: false,
    //                 code: 400,
    //                 message: 'The Invalid User!'
    //             });
    //         }
    //     }
    // );
}
module.exports = Validate;