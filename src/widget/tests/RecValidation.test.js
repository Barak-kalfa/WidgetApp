import { it, expect, describe } from "vitest";
import TEST_SETTINGS from "./tests-settings/widgetTestsSettings.json";
import { validateRecommendation } from "../validation/RecValidation.js";

it("it should return false if one of the fields is null", () => {
  const shouldBeTrue = validateRecommendation({ a: "1" }, TEST_SETTINGS);
  const shouldBeFalse = validateRecommendation({ a: "" }, TEST_SETTINGS);

  expect(shouldBeTrue).toBeTrue();
  expect(shouldBeFalse).toBeFalsy();
});

it("should return false if the image url doesn't end with the right file type", () => {
  const jpgShouldBeTrue = validateRecommendation(
    { thumbnail: [{ url: "abc.jpg" }] },
    TEST_SETTINGS
  );
  const pngShouldBeTrue = validateRecommendation(
    { thumbnail: [{ url: "abc.png" }] },
    TEST_SETTINGS
  );
  const svgShouldBeTrue = validateRecommendation(
    { thumbnail: [{ url: "abc.svg" }] },
    TEST_SETTINGS
  );
  const gifShouldBeTrue = validateRecommendation(
    { thumbnail: [{ url: "abc.gif" }] },
    TEST_SETTINGS
  );
  const jpegShouldBeTrue = validateRecommendation(
    { thumbnail: [{ url: "abc.jpeg" }] },
    TEST_SETTINGS
  );
  const jsShouldBeFalse = validateRecommendation(
    { thumbnail: [{ url: "abc.js" }] },
    TEST_SETTINGS
  );

  expect(jpgShouldBeTrue).toBeTrue();
  expect(pngShouldBeTrue).toBeTrue();
  expect(svgShouldBeTrue).toBeTrue();
  expect(gifShouldBeTrue).toBeTrue();
  expect(jpegShouldBeTrue).toBeTrue();
  expect(jsShouldBeFalse).toBeFalsy();
});
