"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport_jwt_1 = require("passport-jwt");
require('dotenv').config({ debug: process.env.DEBUG });
exports.TokenStrategy = new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET
}, function (token, done) {
    try {
        //Pass the user details to the next middleware          
        return done(null, token.user);
    }
    catch (error) {
        done(error);
    }
});
//# sourceMappingURL=auth.js.map