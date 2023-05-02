module.exports = {
    jwt: {
        authTokenExpiry: "15m",
        refreshTokenExpiry: "60m",
        securityCodeExpiry: "30m",
        cookieExpiry: 60 * 60 * 1000, // 60 minutes
    },
    rateLimits: {
        login: 5 * 60 * 1000, // 5 minutes
        passwordReset: 5 * 60 * 1000, // 5 minutes
        refreshToken: 15 * 1000, // 15 seconds
        requestEmailUpdate: 2 * 60 * 1000, // 2 minutes
    },
    passwordResetCodeExpiration: 30 * 60 * 1000 // 30 minutes
};
