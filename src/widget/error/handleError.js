export const failedRecommendations = [];

export function recordError(rec) {
  failedRecommendations.push(rec);
  console.log("ERROR - failed recommendations:", failedRecommendations);
}

export function createSponsoredWithNoImg(rec, settings) {
  const sponsRec = document.createElement(settings.sponsored.element);
  sponsRec.classList.add(settings.sponsored.className);
  sponsRec.id = rec.id;
  sponsRec.innerHTML = `
      <div class="rec-thumb">
            <a href="${rec.url}"
            target="_blank"
              ><div class="rec-no-img">
              <p>${rec.name}</p>
              </div></a>
          </div>
          <div class="rec-footer">
            <span>${rec.branding}</span>
            <p>${rec.origin}</p>
          </div>
  `;
   return sponsRec;
}

export function handleImgError(rec, settings, widgetBox) {
  recordError(rec)
  // rec.noImgError = false;
  switch (rec.origin) {
    case "sponsored":
      const sponsElement = createSponsoredWithNoImg(rec, settings);
      widgetBox.appendChild(sponsElement);
      break;
    case "organic":
      const orgElement = createOrganic(rec, settings);
      widgetBox.appendChild(orgElement);
      break;
    //add more cases for new types of widget elements
    default:
      console.log("Unknown origin: " + rec.origin);
  }
};