const ApiError = require('../error/ApiError');

module.exports = function (err,req,res,next) {
    if(err instanceof ApiError){
        // Закончил тут таймкод 34:50
    }
}