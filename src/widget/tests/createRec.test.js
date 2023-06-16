import fs from "fs";
import path from "path";
import { it, expect, describe, vi } from "vitest";
import { Window } from "happy-dom";
const htmlDocPath = path.join(process.cwd(), "test-index.html");
const htmlDoc = fs.readFileSync(htmlDocPath, "utf8").toString();
const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal("document", document);
import TEST_SETTINGS from "./tests-settings/widgetTestsSettings.json";
import TEST_DATA from "./tests-settings/testsMockData.json";
import { createRecommendation, createThumb } from "../helper/createRec";

describe("testing createRecommendation()", () => {
  const testRec = TEST_DATA.list[0];
  const TEST_ELEMENT = createRecommendation(
    testRec,
    TEST_SETTINGS.type[testRec.origin]
  );
  it("should create the right element type", () => {
    expect(TEST_ELEMENT.nodeName).toBe("DIV");
  });

  it("should give the element the right class", () => {
    expect(TEST_ELEMENT.className).toBe("rec");
  });

  it("should render title and footer conditionally", () => {
    const title = TEST_ELEMENT.querySelector(".rec-title");
    if (TEST_SETTINGS.type[testRec.origin].title) {
      expect(title).not.toBeNull();
    } else {
      expect(title).toBeNull();
    }

    const footer = TEST_ELEMENT.querySelector(".rec-footer");
    if (TEST_SETTINGS.type[testRec.origin].footer) {
      expect(footer).not.toBeNull();
    } else {
      expect(footer).toBeNull();
    }
  });
});

describe("testing createThumb()", () => {
  const testRec = TEST_DATA.list[0];
  const TEST_ELEMENT = document.createElement("div");
  TEST_ELEMENT.innerHTML = createThumb(
    testRec,
    TEST_SETTINGS.type[testRec.origin]
  );
  const thumbElement = TEST_ELEMENT.querySelector(
    TEST_SETTINGS.type[testRec.origin].thumbElementType
  );
  it("should return a valid HTML element with the right class", () => {
    expect(thumbElement.nodeName).toBe("DIV");
    expect(thumbElement.className).toBe("rec-thumb");
  });

  it("should conditionally create an media attribute", () => {
    if (TEST_SETTINGS.type[testRec.origin].thumbElementMediaRef) {
      expect(thumbElement.attributes.length).toBeGreaterThan(1)
    }
  });
});
