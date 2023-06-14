import { getData } from "./data/widgetData.js";
import { startWidget } from "./helper/startWidget.js";

const widget = document.querySelector(".widget");

const widgetData = await getData()
startWidget(widgetData, widget);
