const jwt = require("jsonwebtoken");
const RefreshToken = require("../models/refreshTokenModel");
const timers = require("../config/timers");
const { v4: uuidv4 } = require('uuid');

const createAuthTokens = async (user, isTemp = false) => {
    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET, {
        expiresIn: isTemp ? timers.jwt.securityCodeExpiry : timers.jwt.authTokenExpiry,
    });

    const refreshToken = jwt.sign({
        id: user._id,
        email: user.email,
        // Avoid duplicate keys for multiple refresh requests in the same moment
        uuid: uuidv4(),
    }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: timers.jwt.refreshTokenExpiry,
    });

    const refreshTokenDoc = new RefreshToken({
        token: refreshToken,
        user: user._id,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });
    await refreshTokenDoc.save();

    return { token, refreshToken };
};

module.exports = createAuthTokens;
