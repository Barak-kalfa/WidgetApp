import { it, expect, describe } from "vitest";
import TEST_SETTINGS from "./tests-settings/widgetTestsSettings.json";
import { validateRecommendation } from "../validation/validateRec.js";

describe("testing recValidation()", () => {
it("it should return false if one of the fields is null", () => {
  const rec = { thumbnail: [{ url: "abc.png" }] };
  const rec2 = { thumbnail: "" };
  const shouldBeTrue = validateRecommendation(rec, TEST_SETTINGS);
  const shouldBeFalse = validateRecommendation(rec2, TEST_SETTINGS);

  expect(shouldBeTrue).toBeTruthy();
  expect(shouldBeFalse).toBeFalsy();
});

it("should return false if the image url doesn't end with the right file type", () => {
  const imgTypes = ["jpg", "png", "svg", "gif", "jpeg"];
  imgTypes.forEach((type) => {
    const rec = {
      origin: TEST_SETTINGS.typeFilter[0],
      thumbnail: [{ url: `abc.${type}` }],
    };
    const shouldBeTrue = validateRecommendation(rec, TEST_SETTINGS);
    expect(shouldBeTrue).toBeTruthy();
  });
  const rec = {
    origin: TEST_SETTINGS.typeFilter[0],
    thumbnail: [{ url: "abc.js" }],
  };
  const shouldBeFalse = validateRecommendation(rec, TEST_SETTINGS);
  expect(shouldBeFalse).toBeFalsy();
});
});
