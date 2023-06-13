import options from "../widgetOptions.json" assert { type: "json" };
import { renderSponsored, renderOrganic } from "./widget.js";

export async function getRecommendations(){
  const response = await fetch(
    `http://api.taboola.com/1.0/json/${options.publisherId}/recommendations.get?app.type=${options.appType}&app.apikey=${options.appApiKey}&count=4&source.type=video&source.id=${options.sourceId}&source.url=http://www.site.com/videos/214321562187.html`
  );
  const resData = await response.json();
  if (!response.ok){
    throw new Error(response.status, 'Sending the request failed', resData)
  } else {
    resData.list.forEach((rec) => {
      if (options.typeFilter.includes(rec.origin)) {
        switch (rec.origin) {
          case "sponsored":
            renderSponsored(rec);
            break;
          case "organic":
            renderOrganic(rec);
            break;
          //add more cases for new types of recommendations
          default:
            console.log("Unknown origin: " + rec.origin);
        }
      }
    });
  }

}