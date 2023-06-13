import mockData from "./mockData.json" assert { type: "json" };
import options from "../widgetOptions.json" assert { type: "json" };

const widget = document.querySelector(".widget");
widget.innerHTML = `<div class="w-header"><p>${options.title}</p></div>
<div class="w-box">
</div>`;
const widgetBox = document.querySelector(".w-box");

function renderSponsored(rec) {
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

async function getRec() {
  const res = await fetch(`http://api.taboola.com/1.0/json/${options.publisherId}/recommendations.get?app.type=${options.appType}&app.apikey=${options.appApiKey}&count=4&source.type=video&source.id=${options.sourceId}&source.url=http://www.site.com/videos/214321562187.html`);
  const data = await res.json()
  data.list.forEach((rec) => {
    if (options.typeFilter.includes(rec.origin)) {
      switch (rec.origin) {
        case "sponsored":
          renderSponsored(rec);
          break;
        case "organic":
          renderOrganic(rec);
          break;
        //add more cases for new types of recommendations
        default:
          console.log("Unknown origin: " + rec.origin);
      }
    }
  });
}

getRec()


