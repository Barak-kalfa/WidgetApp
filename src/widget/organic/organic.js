export function createOrganic(rec, settings) {
  const orgRec = document.createElement(settings.organic.element);
  orgRec.classList.add(settings.organic.className);
  orgRec.id = rec.id;
  orgRec.innerHTML = `
      <div class="rec-thumb"">
            <a href="${rec.url}"
              ><img
                title="${rec.name}"
                src="${rec.thumbnail[0].url}"
                onerror="this.onerror = null; this.src = '../../src/images/No-Image-Placeholder.svg'"
                alt="${rec.name}"
            /></a>
          </div>
          <div class="rec-title">
            <p>${rec.name}</p>
          </div>
  `;
  return orgRec;
}