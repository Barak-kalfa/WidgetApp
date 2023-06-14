export function createOrganic(rec) {
  const orgRec = document.createElement("div");
  orgRec.classList.add("rec");
  orgRec.innerHTML = `
      <div class="rec-thumb">
            <a href="${rec.url}"
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
  `;
  return orgRec;
}