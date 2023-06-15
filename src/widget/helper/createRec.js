export function createThumb(rec, element) {
  switch (rec.origin) {
    case "sponsored":
      return `<${element.thumbElementType} class="${element.thumbElementClass}" style="background-image: url(${rec.thumbnail[0].url}), url('./src/images/default-background.svg')">
      </${element.thumbElementType}>`;
    case "organic":
      return `<${element.thumbElementType} class="${element.thumbElementClass}" style="background-image: url(${rec.thumbnail[0].url}), url('./src/images/default-background.svg')">
      </${element.thumbElementType}>`;
    //Add more cases for new recommendations types
    default:
      return `<${element.thumbElementType} class="${element.thumbElementClass}" style="background-image: url(${rec.thumbnail[0].url}), url('./src/images/default-background.svg')">
      </${element.thumbElementType}>`;
  }
}

export function createRecommendation(rec, element) {
  const recElement = document.createElement(element.elementType);
  recElement.classList.add(element.className);
  recElement.id = rec.id;
  recElement.innerHTML = `
        <a href="${rec.url}" ${element.outboundLink ? 'target="_blank"' : ""}>
          ${createThumb(rec, element)}.
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
