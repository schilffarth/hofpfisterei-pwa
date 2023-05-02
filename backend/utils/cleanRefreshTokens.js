const cron = require('node-cron');
const RefreshToken = require('../models/refreshTokenModel');

async function removeExpiredRefreshTokens() {
    const now = new Date();
    await RefreshToken.deleteMany({ expiresAt: { $lt: now } });
}

// Schedule the function to run once every X time period (e.g., once per day)
// The cron expression '0 0 * * *' means the function will run at 00:00 every day
cron.schedule('0 0 * * *', removeExpiredRefreshTokens);

module.exports = removeExpiredRefreshTokens;
