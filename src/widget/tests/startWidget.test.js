import fs from "fs";
import path from "path";
import { it, expect, describe, vi } from "vitest";
import { Window } from "happy-dom";
import { startWidget } from "../helper/startWidget.js";
import testData from "../tests-settings/testsMockData.json";
import testSettings from "../tests-settings/widgetTestsSettings.json";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDoc = fs.readFileSync(htmlDocPath, "utf8").toString();
const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal("document", document);

describe("testing startWidget()", () => {
const testWidget = document.querySelector("#widget");
startWidget(testData, testWidget, testSettings);

it("should create a widget header", () => {
  const header = testWidget.querySelector(".w-header");
  expect(header).not.toBeNull();
});
});