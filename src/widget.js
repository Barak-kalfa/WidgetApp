import options from "../widgetOptions.json" assert { type: "json" };
import { getRecommendations } from "./getData.js";

const widget = document.querySelector(".widget");
widget.innerHTML = `<div class="w-header"><p>${options.header}</p></div>
<div class="w-box">
</div>`;
const widgetBox = document.querySelector(".w-box");

export function renderSponsored(rec) {
  const sponsRec = document.createElement("div");
  sponsRec.classList.add("rec");
  sponsRec.innerHTML = `
      <div class="rec-thumb">
            <a href="${rec.url}"
            target="_blank"
              ><img
                title="${rec.name}"
                src="${rec.thumbnail[0].url}"
                onerror='this.src="images/No-Image-Placeholder.svg"'
                alt="${rec.name}"
            /></a>
          </div>
          <div class="rec-title">
            <p>${rec.name}</p>
          </div>
          <div class="rec-footer">
            <span>${rec.branding}</span>
            <p>${rec.origin}</p>
          </div>
  `;
  widgetBox.appendChild(sponsRec);
}

export function renderOrganic(rec) {
  const orgRec = document.createElement("div");
  orgRec.classList.add("rec");
  orgRec.innerHTML = `
      <div class="rec-thumb">
            <a href="${rec.url}"
              ><img
                title="${rec.name}"
                src="${rec.thumbnail[0].url}"
                onerror='this.src="images/No-Image-Placeholder.svg"'
                alt="${rec.name}"
            /></a>
          </div>
          <div class="rec-title">
            <p>${rec.name}</p>
          </div>
  `;
  widgetBox.appendChild(orgRec);
}


getRecommendations()
