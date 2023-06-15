import { createRecommendation } from "./createRec.js";
import { validateRecommendation } from "../error/handleError.js";

export function createWidget(widgetData, widget, settings) {
  try {
    widget.style.color = settings.textColor || "black";
    widget.style.backgroundColor = settings.backgroundColor || "transparent";
    widget.innerHTML = `<div class="w-header"><p>${settings.header}</p></div>
<div class="w-box">
</div>`;
    const widgetBox = document.getElementsByClassName("w-box");
    widgetData.list.forEach((rec) => {
      if (settings.typeFilter.indexOf(rec.origin) !== -1) {
        if (validateRecommendation(rec)) {
          widgetBox[0].appendChild(
            createRecommendation(rec, settings.type[rec.origin])
          );
        }
      }
    });
  } catch (e) {
    console.error("Error", e);
  }
}
