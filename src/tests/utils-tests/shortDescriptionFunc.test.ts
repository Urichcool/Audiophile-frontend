import { shortDescrFunc } from "../../utils/shortDescrFunc";

describe("short-description-test", () => {
  test("should return short description", () => {
    expect(
      shortDescrFunc(
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      )
    ).toBe(
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone..."
    );
    expect(
      shortDescrFunc(
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      ).length
    ).toBe(105);
  });
  test("should return full description", () => {
    expect(
      shortDescrFunc(
        "The new XX99 Mark II headphones is the pinnacle of pristine audio."
      )
    ).toBe(
      "The new XX99 Mark II headphones is the pinnacle of pristine audio."
    );
  });
  test("should return empty string", () => {
    expect(shortDescrFunc(undefined)).toBe("");
  });
});
