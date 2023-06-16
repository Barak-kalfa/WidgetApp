export function createThumb(rec, element) {
  let thumbMediaRef = element.thumbElementMediaRef;

  const insertURL = (url) => {
      if (thumbMediaRef.indexOf("THUMB_URL") !== -1) {
        const splitAttr = thumbMediaRef.split(" ");
        splitAttr[splitAttr.indexOf("THUMB_URL")] = url;
        const attrWithURL = splitAttr.join("");
        thumbMediaRef = attrWithURL;
      }
  };

  insertURL(rec.thumbnail[0].url);
  switch (rec.origin) {
    case "REPLACE_WITH_ORIGIN_TYPE":
    // return new element
    default:
      return `<${element.thumbElementType} class="${element.thumbElementClass}" ${thumbMediaRef}></${element.thumbElementType}>`;
  }
}

export function createRecommendation(rec, element) {
  const recElement = document.createElement(element.elementType);
  recElement.classList.add(element.className);
  recElement.id = rec.id;
  switch (rec.origin) {
    case "REPLACE_WITH_ORIGIN_TYPE":
    // recElement.innerHTML = ` BUILD NEW ELEMENT `
    // break;
    default:
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
        </a>`;
      break;
  }
  return recElement;
}
