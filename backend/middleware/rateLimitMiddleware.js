const expressRateLimit = require('express-rate-limit');

const rateLimitMiddleware = (rateLimit, maxRequests = 10) => expressRateLimit({
    windowMs: rateLimit,
    max: maxRequests, // limit each IP to maxRequests per windowMs
    message: 'Too many requests, please try again later.',
});

module.exports = rateLimitMiddleware;
