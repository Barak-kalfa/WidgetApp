export function createSponsored(rec, element) {
  const sponsRec = document.createElement(element.type);
  sponsRec.classList.add(element.className);
  sponsRec.id = rec.id;
  sponsRec.innerHTML = `
      <div class="rec-thumb">
            <a href="${rec.url}"
            target="_blank"
              ><img
                title="${rec.name}"
                onerror="this.onerror = null; this.src = '../../src/images/No-Image-Placeholder.svg'" 
                src="${rec.thumbnail[0].url}" alt="${rec.name}"
                /></a>
          </div>
          <div class="rec-title">
            <p>${rec.name}</p>
          </div>
          <div class="rec-footer">
            <span>${rec.branding}</span>
            <p>${rec.origin}</p>
          </div>
  `;
  return sponsRec;
}
