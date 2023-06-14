import fs from "fs";
import path from "path";
import { it, expect, describe, vi } from "vitest";
import { Window } from "happy-dom";
import { createSponsored } from "./sponsored.js";
import testSettings from "../tests-settings/widgetTestsSettings.json";
import testData from "../tests-settings/testsMockData.json";
const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDoc = fs.readFileSync(htmlDocPath, "utf8").toString();
const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal("document", document);

describe("testing createSponsored()", () => {
  const sponsoredList = testData.list.filter(
    (rec) => rec.origin === "sponsored"
  );
  const element = createSponsored(
    sponsoredList[0],
    testSettings.type.sponsored
  );

  it("should return an element", () => {
    expect(element).not.toBeNull();
  });

  it("div should have a class of rec", () => {
    const recClass = element.classList.contains("rec");
    expect(recClass).toBeTruthy();
  });

  it("div should have a footer div", () => {
    const footer = element.querySelector(".rec-footer");
    expect(footer).not.toBeNull();
  });
});
