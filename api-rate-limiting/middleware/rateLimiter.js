const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  timer: 1 * 60 * 1000, // 1 minute
  max: 5, // 5 requests per IP
  message: {
    status: 429,
    error: 'Too many requests, please try again later'
  },
  
});

module.exports = apiLimiter;
