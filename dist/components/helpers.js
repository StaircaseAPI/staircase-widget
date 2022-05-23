import jwt_decode from 'jwt-decode';

export var decodeJWTToken = function (token) {
    return jwt_decode(token);
};
