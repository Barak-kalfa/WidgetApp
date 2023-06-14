
export async function getData(settings){
  const response = await fetch(
    `http://api.taboola.com/1.0/json/${settings.publisherId}/recommendations.get?app.type=${settings.appType}&app.apikey=${settings.appApiKey}&count=4&source.type=video&source.id=${settings.sourceId}&source.url=http://www.site.com/videos/214321562187.html`
  );
  if (!response.ok){
    throw new Error(response.status, 'Sending the request failed', resData)
  } else {
    const resData = await response.json();
    return resData;
  }
  
}