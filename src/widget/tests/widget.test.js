import fs from "fs";
import path from "path";
import { it, expect, vi } from "vitest";
import { Window } from "happy-dom";
const htmlDocPath = path.join(process.cwd(), "test-index.html");
const htmlDoc = fs.readFileSync(htmlDocPath, "utf8").toString();
const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal("document", document);
import TEST_SETTINGS from "./tests-settings/widgetTestsSettings.json"

it(`should locate a div with a id of ${TEST_SETTINGS.HTMLwidgetId}`, () => {
  const widget = document.querySelector(`#${TEST_SETTINGS.HTMLwidgetId}`);
  expect(widget).not.toBeNull();
});
