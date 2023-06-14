export async function getData(settings) {
  try {
    const response = await fetch(
      `http://api.taboola.com/1.0/json/${settings.api.publisherId}/recommendations.get?app.type=${settings.api.appType}&app.apikey=${settings.api.appApiKey}&count=4&source.type=video&source.id=${settings.api.sourceId}&source.url=http://www.site.com/videos/214321562187.html`
    );
    const resData = await response.json();
    return resData;
  } catch (e) {
    console.log("getData:", e.message);
    // return {id: "getDataError", list: []}
  }
}
