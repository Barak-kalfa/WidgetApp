import { createRecommendation } from "./createRec.js";
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
          if (!/\.(jpeg|jpg|png|gif)\b/i.test(rec.thumbnail[0].url)) {
            recordError(rec);
            return;
          }
        }
        widgetBox.appendChild(
          createRecommendation(rec, settings.type[rec.origin])
        );
      }
    });
  } catch (e) {
    console.error("Error", e);
  }
}
