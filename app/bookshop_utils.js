function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function makeHalfPrice(price) {
    return price/2;
}

function countBooks(titleArray) {
    return titleArray.length;
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks
};