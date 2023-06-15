import { it, expect, describe } from "vitest";
import TEST_SETTINGS from "./tests-settings/widgetTestsSettings.json";
import { validateRecommendation } from "../validation/validateRec.js";

describe("testing validateRecommendation()", () => {
  it("it should return false if one of the fields is null", () => {
    const validRec = {
      url: "https://abc.com",
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url: "abc.png" }],
    };
    const inValidRec = {
      url: "",
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url: "abc.png" }],
    };
    const shouldBeTrue = validateRecommendation(validRec, TEST_SETTINGS);
    const shouldBeFalse = validateRecommendation(inValidRec, TEST_SETTINGS);

    expect(shouldBeTrue).toBeTruthy();
    expect(shouldBeFalse).toBeFalsy();
  });

  it("should return false if the url is not valid", () => {
    const validRec = {
      url: "https://www.example.com",
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url: "abc.png" }],
    };
    const inValidRec = {
      url: "https://www.example.com/invalid-page",
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url: "abc.png" }],
    };
    const shouldBeTrue = validateRecommendation(validRec, TEST_SETTINGS);
    const shouldBeFalse = validateRecommendation(inValidRec, TEST_SETTINGS);

    expect(shouldBeTrue).toBeTruthy();
    expect(shouldBeFalse).toBeFalsy();
  });

  it("should return false if the image type is not in list", () => {
    const imgTypes = ["jpg", "png", "svg", "gif", "jpeg"];
    imgTypes.forEach((type) => {
      const validRec = {
        url: "https://www.abc.com",
        origin: TEST_SETTINGS.typeFilter[0],
        thumbnail: [{ url: `abc.${type}` }],
      };
      const shouldBeTrue = validateRecommendation(validRec, TEST_SETTINGS);
      expect(shouldBeTrue).toBeTruthy();
    });
    const inValidRec = {
      url: "https://www.example.com",
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url: "abc.js" }],
    };
    const shouldBeFalse = validateRecommendation(inValidRec, TEST_SETTINGS);
    expect(shouldBeFalse).toBeFalsy();
  });
});
