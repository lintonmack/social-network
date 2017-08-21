var User = require('../models/User')

var usersControllers = {
    login: function (req, res, next) {
        User.login(req.body, function (error, result) {
        })
    }
 }
    
module.exports = usersControllers
