function createThumb(rec) {
  switch (rec.origin) {
    case "sponsored":
      return `<div class="rec-thumb" style="background-image: url(${rec.thumbnail[0].url}), url('./src/images/default-background.svg')">
      </div>`;
    case "organic":
      return `<div class="rec-thumb" style="background-image: url(${rec.thumbnail[0].url}), url('./src/images/default-background.svg')">
        </div>`;
    case "failed-image":
      return `<div class="rec-thumb" style="background-image:`
    //Add more cases for new recommendations types
    default:
      return `<div class="rec-thumb" style="background-image: url(${rec.thumbnail[0].url}), url('./src/images/default-background.svg')">
        </div>`;
  }
}

export function createRecommendation(rec, element) {
  const recElement = document.createElement(element.elementType);
  recElement.classList.add(element.className);
  recElement.id = rec.id;
  recElement.innerHTML = `
        <a href="${rec.url}" ${element.outboundLink ? 'target="_blank"' : ""}>
          ${createThumb(rec)}
          ${
            element.title
              ? `<div class="rec-title">
          <p>${rec.name}</p>
          </div>`
              : ""
            }
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
  return recElement;
}
