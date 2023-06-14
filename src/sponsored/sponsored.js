export function createSponsored(rec) {
  const sponsRec = document.createElement("div");
  sponsRec.classList.add("rec");
  sponsRec.innerHTML = `
      <div class="rec-thumb">
            <a href="${rec.url}"
            target="_blank"
              ><img
                title="${rec.name}"
                src="${rec.thumbnail[0].url}"
                onerror='this.src="images/No-Image-Placeholder.svg"'
                alt="${rec.name}"
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