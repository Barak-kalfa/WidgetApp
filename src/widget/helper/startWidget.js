import { createSponsored } from "../sponsored/sponsored.js";
import { createOrganic } from "../organic/organic.js";

export function startWidget(widgetData, widget, settings) {
  try {
    widget.innerHTML = `<div class="w-header"><p>${settings.header}</p></div>
<div class="w-box">
</div>`;
    const widgetBox = document.querySelector(".w-box");
    widgetData.list.forEach((rec) => {
      if (settings.typeFilter.includes(rec.origin)) {
        switch (rec.origin) {
          case "sponsored":
            const sponsElement = createSponsored(rec);
            widgetBox.appendChild(sponsElement);
            break;
          case "organic":
            const orgElement = createOrganic(rec);
            widgetBox.appendChild(orgElement);
            break;
          //add more cases for new types of recommendations
          default:
            console.log("Unknown origin: " + rec.origin);
        }
      }
    });
  } catch (e) {
    console.error("Error", e);
  }
}
