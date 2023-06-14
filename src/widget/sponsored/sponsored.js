export function createSponsored(rec, element) {

  const sponsRec = document.createElement(element.type);
  sponsRec.classList.add(element.className);
  sponsRec.id = rec.id;
  sponsRec.innerHTML = `
        <a href="${rec.url}" ${element.outboundLink ? 'target="_blank"' : ""}>
          <div class="rec-thumb">
            <img
                title="${rec.name}"
                onerror="this.onerror = null; this.src = '../../src/images/No-Image-Placeholder.svg'"
                src="${rec.thumbnail[0].url}" alt="${rec.name}"
            />
          </div>
          ${element.title ? `<div class="rec-title">
          <p>${rec.name}</p>`: ""}
          </div>
          ${element.footer ? `<div class="rec-footer">
            <span>${rec.branding}</span>
            <p>${rec.origin}</p>
          </div>` : ""}
          </a>
  `;
  return sponsRec;
}
