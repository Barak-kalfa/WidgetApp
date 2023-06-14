import options from "../../widgetOptions.json" assert { type: "json" };
import { renderSponsored } from "../sponsored/sponsored.js";
import { renderOrganic } from "../organic/organic.js";

export function startWidget(widgetData, widget) {
  try {
    widget.innerHTML = `<div class="w-header"><p>${options.header}</p></div>
<div class="w-box">
</div>`;
    const widgetBox = document.querySelector(".w-box");
    widgetData.list.forEach((rec) => {
      if (options.typeFilter.includes(rec.origin)) {
        switch (rec.origin) {
          case "sponsored":
            const sponsElement = renderSponsored(rec);
            widgetBox.appendChild(sponsElement);
            break;
          case "organic":
            const orgElement = renderOrganic(rec);
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