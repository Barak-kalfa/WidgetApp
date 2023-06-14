import { createSponsored } from "../sponsored/sponsored.js";
import { createOrganic } from "../organic/organic.js";
import { recordError } from "../error/handleError.js";

export function startWidget(widgetData, widget, settings) {
  try {
    widget.innerHTML = `<div class="w-header"><p>${settings.header}</p></div>
<div class="w-box">
</div>`;
    const widgetBox = document.querySelector(".w-box");
    widgetData.list.forEach((rec) => {
      if (settings.typeFilter.includes(rec.origin)) {
        for (const field in rec) {
          if (!rec[field]) {
            recordError(rec);
            return;
          }
        }
        switch (rec.origin) {
          case "sponsored":
            const sponsElement = createSponsored(rec, settings.sponsoredElement);
            sponsElement && widgetBox.appendChild(sponsElement);
            break;
          case "organic":
            const orgElement = createOrganic(rec, settings, widgetBox);
            widgetBox.appendChild(orgElement);
            break;
          //add more cases for new types of widget elements
          default:
            console.log("Unknown origin: " + rec.origin);
        }
      }
    });
  } catch (e) {
    console.error("Error", e);
  }
}
