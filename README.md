INSTRUCTIONS FOR USING THE WIDGET:

Widget Role:
To located a dedicated HTML element with an ID of "widget" in the "index.html" file and to load and render recommendations inside of it.

Widget Control:
The widget is controlled and managed through the "widgetSettings.json" file located in ".src/widget/settings". 

Setting up the widget:
1. Create an HTML element with an ID of "widget" in your "index.html" file.
2. Import "widget.js" and "widget-styles.css" into "index.html".
3. position the widget as you like. The widget is setup to take 100% of the width.
4. Use the "widgetSettings.json" file to configure the widget.


Settings Legend:
{
  "header": string,
"typeFilter": [string], (e.g. "sponsored")
  "api": {
    "publisherId": string,
    "appType": string,
    "appApiKey": string,
    "sourceId": string,
  },
  "type": {
    "organic": {
     "elementType": string, (choose an HTML element - e.g. "div")
      "className": string, (choose a css class name - e.g. "rec")
      "title": boolean, (choose if to render a title)
      "footer": boolean, (choose if to render a footer)
      "outboundLink": boolean (choose if link opens in new tab)
    },
    "sponsored": {
      "elementType": string, (choose an HTML element - e.g. "div")
      "className": string, (choose a css class name - e.g. "rec")
      "title": boolean, (choose if to render a title)
      "footer": boolean, (choose if to render a footer)
      "outboundLink": boolean (choose if link opens in new tab)
    }
  }
}

How to use the widget settings:
1. Choose a header string for the widget with the "header" field.
2. Choose which types of recommendations to render by adding their name to the "typeFilter" array.
3. Enter API settings in the "api" field.
4. Sponsored and Organic recommendations are pre-defined and styled, but you can custom them to your liking, use the "Settings Legend:" above for reference and add css.

The widget is ready to go.
