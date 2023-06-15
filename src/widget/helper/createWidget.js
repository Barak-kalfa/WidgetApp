import { createRecommendation } from "./createRec.js";
import { validateRecommendation } from "../validation/validateRec.js";

export function createWidget(widgetData, widget, settings) {
  try {
    widget.style.color = settings.textColor || "black";
    widget.style.backgroundColor = settings.backgroundColor || "transparent";
    widget.innerHTML = `<div class="w-header"><p>${settings.header}</p></div>
<div id="${settings.innerElementId}">
</div>`;
    const widgetBox = document.getElementById(settings.innerElementId);
    widgetData.list.forEach((rec) => {
      if (settings.typeFilter.indexOf(rec.origin) !== -1) {
        if (validateRecommendation(rec, settings)) {
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
