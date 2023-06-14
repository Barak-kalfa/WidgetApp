import fs from "fs";
import path from "path";
import { it, expect, describe, vi } from "vitest";
import { Window } from "happy-dom";
import { createOrganic } from "./organic";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDoc = fs.readFileSync(htmlDocPath, "utf8").toString();
const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal("document", document);

describe("Testing createOrganic()", () => {
  const rec = {
    url: "http://127.0.0.1:5500/",
    name: "Test",
    thumbnail: [
      {
        url: "https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg",
      },
    ],
  };
  const element = createOrganic(rec);

  it(" should return an HTML element", () => {
    const testElement = document.createElement("div");
    testElement.classList.add("rec");
    expect(element).toEqual();
  });

  it("div should have a class of rec", () => {
    const elementClass = element.classList.contains("rec");
    expect(elementClass).toBeTruthy();
  });

  it("div should not have a footer", () => {
    const footer = element.querySelector(".rec-footer");
    expect(footer).toBeNull();
  });
});
