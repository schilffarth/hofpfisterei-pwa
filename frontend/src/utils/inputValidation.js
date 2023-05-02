export const usernameInfoText = "Username may include letters and numbers only, and must be"
    + " between 6 - 20 characters long.";
export const emailInfoText = "Invalid email address.";
export const passwordInfoText = "Password must be at least 8 characters long and include at least"
    + " one uppercase letter, one lowercase letter, and one number.";
export const phoneInfoText = "Phone number must consist of numbers only.";
export const securityCodeInfoText = "Invalid security code.";

export const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]{6,20}$/;

    return usernameRegex.test(username);
}

export const validateEmail = (email) => {
    return !(
        !email.includes('@') || !email.includes('.')
    );
}

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    return !(
        !passwordRegex.test(password) && password.length
    );
}

export const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{3,20}$/;

    return phoneRegex.test(phone);
}

export const validateSecurityCode = (code) => {
    return code.length === 6;
}

export default {
    usernameInfoText,
    emailInfoText,
    passwordInfoText,
    phoneInfoText,
    securityCodeInfoText,
    validateUsername,
    validateEmail,
    validatePassword,
    validatePhone,
    validateSecurityCode,
}
