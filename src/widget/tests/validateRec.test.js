import { it, expect, describe } from "vitest";
import TEST_SETTINGS from "./tests-settings/widgetTestsSettings.json";
import { validateRecommendation } from "../validation/validateRec.js";

describe("testing validateRecommendation()", () => {
  const validImgURL = "https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg";
  const validURL = "https://www.example.com";
  const invalidURL = "https://www.example.com/invalid-page";

  it("it should return false if one of the fields is null", () => {
    const validRec = {
      url: validURL,
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url:validImgURL }],
    };
    const inValidRec = {
      url: "",
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url: validImgURL }],
    };
    const shouldBeTrue = validateRecommendation(validRec, TEST_SETTINGS);
    const shouldBeFalse = validateRecommendation(inValidRec, TEST_SETTINGS);

    expect(shouldBeTrue).toBeTruthy();
    expect(shouldBeFalse).toBeFalsy();
  });

  it("should return false if the url is not valid", () => {
    const validRec = {
      url: validURL,
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url: validImgURL }],
    };
    const inValidRec = {
      url: invalidURL,
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url: validImgURL }],
    };
    const shouldBeTrue = validateRecommendation(validRec, TEST_SETTINGS);
    const shouldBeFalse = validateRecommendation(inValidRec, TEST_SETTINGS);

    expect(shouldBeTrue).toBeTruthy();
    expect(shouldBeFalse).toBeFalsy();
  });

  it("should return false if the image type is not in list", () => {
    const inValidRec = {
      url: validURL,
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url: validURL }],
    };
    const shouldBeFalse = validateRecommendation(inValidRec, TEST_SETTINGS);
    expect(shouldBeFalse).toBeFalsy();
  });
});
