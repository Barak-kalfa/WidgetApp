function createThumb(rec) {
  switch (rec.origin) {
    case "sponsored":
      return `<div class="rec-thumb" style="background-image: url(${rec.thumbnail[0].url})">
      </div>`;
    case "organic":
      return `<div class="rec-thumb" style="background-image: url(${rec.thumbnail[0].url})">
        </div>`;
    //Add more cases for new recommendations types
    default:
      return `<div class="rec-thumb" style="background-image: url(${rec.thumbnail[0].url})">
        </div>`;
  }
}

export function createRecommendation(rec, element) {
  const sponsRec = document.createElement(element.elementType);
  sponsRec.classList.add(element.className);
  sponsRec.id = rec.id;
  sponsRec.innerHTML = `
        <a href="${rec.url}" ${element.outboundLink ? 'target="_blank"' : ""}>
          ${createThumb(rec)}
          ${
            element.title
              ? `<div class="rec-title">
          <p>${rec.name}</p>`
              : ""
          }
          </div>
          ${
            element.footer
              ? `<div class="rec-footer">
            <div>${rec.branding}</div>
            <p>${rec.origin}</p>
          </div>`
              : ""
          }
          </a>
  `;
  return sponsRec;
}
