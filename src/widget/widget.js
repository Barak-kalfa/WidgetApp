import { getData } from "./data/widgetData.js";
import { startWidget } from "./helper/startWidget.js";
import settings from "./settings/widgetSettings.json" assert {type: 'json'};
import mockData from "./tests-settings/testsMockData.json" assert {type: 'json'};


const widgetElement = document.querySelector("#widget");
const widgetData = await getData(settings)
startWidget(mockData, widgetElement, settings);
