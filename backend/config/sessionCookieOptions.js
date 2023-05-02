const timers = require('./timers');

const sessionCookieOptions = {
    httpOnly: false,
    secure: process.env.MODE === 'production', // Use 'secure: true' only in production
    maxAge: timers.jwt.cookieExpiry,
    sameSite: 'Lax',
};

module.exports = sessionCookieOptions;
