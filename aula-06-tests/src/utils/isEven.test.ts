import { isEven } from "./isEven";

describe("isEven", () => {
  test("Returns true for even numbers", () => {
    expect(isEven(4)).toBe(true);
  });

  test("Returns false for odd numbers", () => {
    expect(isEven(7)).toBe(false);
  });
});
