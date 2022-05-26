import jwt_decode from 'jwt-decode';
export var decodeJWTToken = function (token) {
    return jwt_decode(token);
};
export var sleep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
