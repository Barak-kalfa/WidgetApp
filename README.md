#RECOMMENDATIONS WIDGET

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
  
  "HTMLwidgetId": "WIDGET ID AS IN HTML FILE", (string - e.g. "bottom-widget")
  "innerElementId": "PICK INNER ELEMENT ID", (string - e.g. "inner-element")
  "header": "PICK WIDGET HEADER", (string - e.g. "Recommendations for you:")
  "textColor": "PICK COLOR FOR WIDGET TEXT", (string - e.g. any css color)
  "backgroundColor": "PICK WIDGET BACKGROUND COLOR", (string - e.g. any css color)
  "typeFilter": ["PICK REC TYPES TO RENDER"], (string - e.g. "organic" *can have more then one type)

  api:
    "publisherId": "API DETAILS", (string)
    "appType": "API DETAILS", (string)
    "appApiKey": "API DETAILS", (string)
    "sourceId": "API DETAILS", (string)

  type:
      "organic": 
        "elementType": "PICK ORGANIC ELEMENT TYPE", (string - e.g. "div").
        "className": "PICK ORGANIC ELEMENT CLASS", (string - e.g. "rec").
        "thumbElementType": "PICK THUMBNAIL ELEMENT TYPE", (string - e.g. "div").
        "thumbElementClass": "PICK THUMBNAIL ELEMENT CLASS", (string - e.g. "rec-thumb").
        "thumbElementMediaRef: "PICK IMG/VIDEO SOURCE URL ELEMENT REF AND INSERT " THUMB_URL " (notice spaces at start and end), (string - e.g. "src=' THUMB_URL '").
        "title": BOOLEAN.
        "footer": BOOLEAN.
        "outboundLink": BOOLEAN.
        "showWithoutImg": BOOLEAN.
  
      "sponsored": 
        "elementType": "PICK ORGANIC ELEMENT TYPE", (string - e.g. "div").
        "className": "PICK ORGANIC ELEMENT CLASS", (string - e.g. "rec").
        "thumbElementType": "PICK THUMBNAIL ELEMENT TYPE", (string - e.g. "div").
        "thumbElementClass": "PICK THUMBNAIL ELEMENT CLASS", (string - e.g. "rec-thumb").
        "thumbElementMediaRef: "PICK IMG/VIDEO SOURCE URL ELEMENT REF AND INSERT " THUMB_URL " (notice spaces at start and end), (string - e.g. "src=' THUMB_URL '").
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
  A. Use "elementType" to choose HTML elements type.
  B. Use "className" to choose class names for the elements.
  C. Use "thumbElementType" to choose thumbnails HTML elements type.
  D. Use "thumbElementClass" to choose thumbnails class names for the elements.
  E. ***Use "thumbElementMediaRef" to enter the HTML element attribute for image or video source reference with the string " THUMB_URL " between 2 spaces (e.g. "src=' THUMB_URL '"). The widget will replace the string with the right URL.
  F. Choose if to render title and footer.
  G. Choose if to show the recommendation without media (image/video).
The widget is ready to go.

**** YOU CAN ADD MORE THAN ONE WIDGET WITH DIFFERENT SETTINGS BY: 
1. Add another HTML element with a new ID to your html file.
2. Create copy of widgetSettings.json file and rename it.
3. Customize new settings.
4. Import new settings json file to the widget.js file.
5. Initiate "startWidget()" function another time and pass new settings as an argument.




