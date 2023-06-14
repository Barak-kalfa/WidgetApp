import fs from "fs";
import path from "path";
import { it, expect, describe, vi } from "vitest";
import { Window } from "happy-dom";
import { renderSponsored } from "./sponsored.js";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDoc = fs.readFileSync(htmlDocPath, "utf8").toString();
const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal('document', document);

const rec = {
  url: "http://127.0.0.1:5500/",
  name: "Test",
  thumbnail: [{url: "https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg"}]
};
const element = renderSponsored(rec);

it("renderOrganic() should return a div element", () => {
  expect(element).not.toBeNull();
});

it("div should have a class of rec", () => {
  const elementClass = element.classList.contains("rec")
  expect(elementClass).toBeTruthy();
});

