import CryptoJS from 'crypto-js';
import jwt_decode from 'jwt-decode';
export var toBase64Url = function (data) {
    // Encode in classical base64
    var encodedSource = CryptoJS.enc.Base64.stringify(data);
    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');
    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
};
export var generateJWTToken = function (data) {
    var header = {
        alg: 'HS256',
        typ: 'JWT',
    };
    var encodedHeader = toBase64Url(CryptoJS.enc.Utf8.parse(JSON.stringify(header)));
    var encodedData = toBase64Url(CryptoJS.enc.Utf8.parse(JSON.stringify(data)));
    var unsignedToken = encodedHeader + '.' + encodedData;
    console.log({ unsignedToken: unsignedToken });
    var signedToken = signJWTToken(unsignedToken);
    console.log({ signedToken: signedToken });
    return signedToken;
};
export var signJWTToken = function (token) {
    var secret = 'staircase';
    var signature = toBase64Url(CryptoJS.HmacSHA256(token, secret));
    return token + '.' + signature;
};
export var decodeJWTToken = function (token) {
    return jwt_decode(token);
};
