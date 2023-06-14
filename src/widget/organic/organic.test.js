import fs from "fs";
import path from "path";
import { it, expect, describe, vi } from "vitest";
import { Window } from "happy-dom";
import { createOrganic } from "./organic.js";
import testSettings from "../tests-settings/widgetTestsSettings.json";
import testData from "../tests-settings/testsMockData.json";
const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDoc = fs.readFileSync(htmlDocPath, "utf8").toString();
const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal("document", document);

describe("testing createOrganic()", () => {
  const organicList = testData.list.filter(
    (rec) => rec.origin === "organic"
  );
  const element = createOrganic(
    organicList[0],
    testSettings.type.organic
  );

  it("should return an element", () => {
    expect(element).not.toBeNull();
  });

  it("div should have a class of rec", () => {
    const recClass = element.classList.contains("rec");
    expect(recClass).toBeTruthy();
  });

  it("div should not have a footer div", () => {
    const footer = element.querySelector(".rec-footer");
    expect(footer).toBeNull();
  });
});
