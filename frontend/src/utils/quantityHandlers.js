export const handleIncreaseQuantity = (quantity) => {
    const numQuantity = parseFloat(quantity);
    const newQuantity = (numQuantity + 0.25).toFixed(2);

    return newQuantity.toString();
};

export const handleDecreaseQuantity = (quantity) => {
    const numQuantity = parseFloat(quantity);
    if (numQuantity > 0.25) {
        const newQuantity = (numQuantity - 0.25).toFixed(2);
        return newQuantity.toString();
    }

    return quantity;
};

export const displayFraction = (value) => {
    const intValue = Math.floor(value);
    const fractionValue = value % 1;

    const fractions = {
        0.25: '1/4',
        0.5: '1/2',
        0.75: '3/4',
    };

    return intValue > 0 ? `${intValue} ${fractions[fractionValue] || ''}` : fractions[fractionValue];
};