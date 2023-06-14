import { getData } from "./data/widgetData.js";
import { startWidget } from "./helper/startWidget.js";
import options from "../widgetOptions.json" assert {type: 'json'};


const widget = document.querySelector(".widget");
const widgetData = await getData(options)
startWidget(widgetData, widget, options);
