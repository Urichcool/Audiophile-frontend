import { priceWithCommas } from "../../utils/priceWithCommas";

describe("price-with-commas-test", () => {
  test("should return price with coma", () => {
    expect(priceWithCommas(1500)).toBe("$ 1,500");
  });
  test("should return price without coma", () => {
    expect(priceWithCommas(500)).toBe("$ 500");
  });
  test("should return empty string", () => {
    expect(priceWithCommas(undefined)).toBe("");
  });
});
