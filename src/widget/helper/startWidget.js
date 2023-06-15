import { createRecommendation } from "./createRec.js";
import { validateRecommendation } from "../error/handleError.js";

export function startWidget(widgetData, widget, settings) {
  try {
    widget.innerHTML = `<div class="w-header"><p>${settings.header}</p></div>
<div class="w-box">
</div>`;
    const widgetBox = document.querySelector(".w-box");
    widgetData.list.forEach((rec) => {
      if (settings.typeFilter.indexOf(rec.origin) !== -1) {
        if (validateRecommendation(rec)) {
          widgetBox.appendChild(
            createRecommendation(rec, settings.type[rec.origin])
          );
        }
      }
    });
  } catch (e) {
    console.error("Error", e);
  }
}
