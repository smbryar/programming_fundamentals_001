const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });

  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 25 when passed 50", () => {
    expect(utils.makeHalfPrice(50)).toBe(25);
  });
})

describe("utils.countBooks", () => {
  test("returns 3 when passed [\"Boy\",\"Ulysses\", \"Moby Dick\"]", () => {
    expect(utils.countBooks(["Boy", "Ulysses", "Moby Dick"])).toBe(3);
  })
})

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };

    expect(utils.isInStock(book)).toBe(true);
  });
  
  test("returns false if the title is not in stock", () => {
    const book = {
      title: "Moby Dick",
      author: "Herman Melville",
      yearOfPublication: 1851,
      quantity: 0
    };

    expect(utils.isInStock(book)).toBe(false);
  });
})