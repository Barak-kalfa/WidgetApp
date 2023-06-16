INSTRUCTIONS FOR USING THE WIDGET:

Widget Role:
To located a dedicated HTML element in the "index.html" file and to load and render the recommendations inside of it.

Widget Control:
The widget is controlled and managed through the "widgetSettings.json" file located in ".src/widget/settings". 

Setting up the widget:
1. Create an HTML element with an ID of your choosing in your html file.
2. Import "widget.js" and "widget-styles.css"(for default styling) into the html file".
3. position the widget as you like. The widget is setup to take 100% of the width.
4. Use the "widgetSettings.json" file to configure the widget.


Settings Legend:
  
  "HTMLwidgetId": "WIDGET ID AS IN HTML FILE", (string)
  "innerElementId": "PICK INNER ELEMENT ID", (string)
  "header": "PICK WIDGET HEADER", (string)
  "textColor": "PICK COLOR FOR WIDGET TEXT", (string)
  "backgroundColor": "PICK WIDGET BACKGROUND COLOR", (string)
  "typeFilter": ["PICK REC TYPES TO RENDER"], (string)

  api:
    "publisherId": "API DETAILS", (string)
    "appType": "API DETAILS", (string)
    "appApiKey": "API DETAILS", (string)
    "sourceId": "API DETAILS", (string)

  type:
      "organic": 
        "elementType": "PICK ORGANIC ELEMENT TYPE", (string).
        "className": "PICK ORGANIC ELEMENT CLASS", (string).
        "thumbElementType": "PICK THUMBNAIL ELEMENT TYPE", (string).
        "thumbElementClass": "PICK THUMBNAIL ELEMENT CLASS", (string).
        "title": BOOLEAN.
        "footer": BOOLEAN.
        "outboundLink": BOOLEAN.
        "showWithoutImg": BOOLEAN.
  
      "sponsored": 
        "elementType": "PICK ORGANIC ELEMENT TYPE", (string)
        "className": "PICK ORGANIC ELEMENT CLASS", (string)
        "thumbElementType": "PICK THUMBNAIL ELEMENT TYPE", (string)
        "thumbElementClass": "PICK THUMBNAIL ELEMENT CLASS", (string)
        "title": BOOLEAN,
        "footer": BOOLEAN,
        "outboundLink": BOOLEAN,
        "showWithoutImg": BOOLEAN

How to use the widget settings:
1. Enter the widget's ID (like in the HTML file) to the "HTMLwidgetId" field.
2. Enter the widget's inner HTML element ID to the "innerElementId" field.
3. Enter the widget's header text to the "header" field.
4. Enter the widget's text color text to the "textColor" field.
5. Enter the widget's background color to the "backgroundColor" field.
6. Enter types of recommendations to render to the array in the "typeFilter" field.
7. Enter API details.
8. Custom recommendations types to your liking.
The widget is ready to go.

**** YOU CAN ADD MORE THAN ONE WIDGET WITH DIFFERENT SETTINGS BY: 
1. Add another HTML element with a new ID to your html file.
2. Create copy of widgetSettings.json file and rename it.
3. Customize new settings.
4. Import new settings json file to the widget.js file.
5. Initiate "startWidget()" function another time and pass new settings as an argument.




