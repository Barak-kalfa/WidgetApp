import options from "../../widgetOptions.json" assert { type: "json" };

export async function getData(){
  const response = await fetch(
    `http://api.taboola.com/1.0/json/${options.publisherId}/recommendations.get?app.type=${options.appType}&app.apikey=${options.appApiKey}&count=4&source.type=video&source.id=${options.sourceId}&source.url=http://www.site.com/videos/214321562187.html`
  );
  if (!response.ok){
    throw new Error(response.status, 'Sending the request failed', resData)
  } else {
    const resData = await response.json();
    return resData;
  }
  
}