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

function isInStock(book) {
    return book.quantity > 0;
}

function getTotalOrderPrice(price, quantity) {
    return price * quantity * 1.2;
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};