import mockData from "./mockData.json" assert { type: "json" };

const recoBox = document.querySelector(".recos-box");


mockData.list.forEach((rec) => {
  const x = document.createElement("div");
  x.classList.add("rec");
  x.innerHTML = `
      <div class="rec-thumb">
            <a href="${rec.url}"
            target="_blank"
              ><img
                title="${rec.name}"
                src="${rec.thumbnail[0].url}"
                onerror='this.src="images/No-Image-Placeholder.svg"'
            /></a>
          </div>
          <div class="rec-title">
            <p>${rec.name}</p>
          </div>
          <div class="rec-bottom">
            <span>${rec.branding}</span>
            <span>${rec.origin}</span>
          </div>
  `;
  recoBox.appendChild(x);
});
