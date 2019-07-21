
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
require('dotenv').config({ debug: process.env.DEBUG });

export const TokenStrategy = new JWTStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.TOKEN_SECRET
    },
    (token, done) => {
        try {
            //Pass the user details to the next middleware          
            return done(null, token.user);
        } catch (error) {
            done(error);
        }
    }
);
