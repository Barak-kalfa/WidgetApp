import { getData } from "./data/widgetData.js";
import { createWidget } from "./helper/createWidget.js";
import settings from "./settings/widgetSettings.json" assert { type: "json" };

async function startWidget(settings) {
  const widget = document.getElementById(settings.HTMLwidgetId);
  const widgetData = await getData(settings);
  createWidget(widgetData, widget, settings);
}
startWidget(settings);
