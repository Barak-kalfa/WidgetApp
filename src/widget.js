import mockData from "./mockData.json" assert { type: "json" };
import options from "../widgetOptions.json" assert { type: "json" };

const widget = document.querySelector(".widget");
widget.innerHTML = `<div class="w-header"><p>${options.title}</p></div>
<div class="w-box">
</div>`;

function renderSponsored(rec) {
  const widgetBox = document.querySelector(".w-box");
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
            /></a>
          </div>
          <div class="rec-title">
            <p>${rec.name}</p>
          </div>
          <div class="rec-bottom">
            <span>${rec.branding}</span>
            <span>${rec.origin}</span>
          </div>
  `;
  widgetBox.appendChild(sponsRec);
}

function renderOrganic(rec) {
  const widgetBox = document.querySelector(".w-box");
  const orgRec = document.createElement("div");
  orgRec.classList.add("rec");
  orgRec.innerHTML = `
      <div class="rec-thumb">
            <a href="${rec.url}"
              ><img
                title="${rec.name}"
                src="${rec.thumbnail[0].url}"
                onerror='this.src="images/No-Image-Placeholder.svg"'
            /></a>
          </div>
          <div class="rec-title">
            <p>${rec.name}</p>
          </div>
  `;
  widgetBox.appendChild(orgRec);
}

mockData.list.forEach((rec) => {
  rec.origin === options.typeFilter ? renderSponsored(rec) : renderOrganic(rec);
});
