import { getData } from "./data/widgetData.js";
import { createWidget } from "./helper/createWidget.js";
import settings from "./settings/widgetSettings.json" assert { type: "json" };
import mockData from "./tests/tests-settings/testsMockData.json" assert { type: "json" };

async function startWidget(settings) {
  const widget = document.getElementById(settings.HTMLwidgetId);
  const widgetData = await getData(settings);
  createWidget(mockData, widget, settings);
}

startWidget(settings);