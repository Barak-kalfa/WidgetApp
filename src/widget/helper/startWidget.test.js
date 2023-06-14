import fs from "fs";
import path from "path";
import { it, expect, describe, vi } from "vitest";
import { Window } from "happy-dom";
import { startWidget } from "./startWidget.js";
import testData from "../../testsMockData.json";
import testSettings from "../tests-settings/widgetTestsSettings.json";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDoc = fs.readFileSync(htmlDocPath, "utf8").toString();
const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal("document", document);

const testWidget = document.querySelector(".widget");
startWidget(testData, testWidget, testSettings);

it("should create a widget header", () => {
  const header = testWidget.querySelector(".w-header");
  expect(header).not.toBeNull();
});

it("should should create the right number of recommendations", () => {
  const numberOfRecs = testData.list.filter((rec) =>
    testSettings.typeFilter.includes(rec.origin)
  );
  const elements = document.querySelectorAll(".rec");
  expect(numberOfRecs.length).toEqual(elements.length);
});
