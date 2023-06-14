import { getData } from "./data/widgetData.js";
import { startWidget } from "./helper/startWidget.js";
import settings from "./settings/widgetSettings.json" assert {type: 'json'};


const widget = document.querySelector(".widget");
const widgetData = await getData(settings)
startWidget(widgetData, widget, settings);
