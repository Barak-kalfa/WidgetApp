export function createElement(rec, element) {

  const RecElement = document.createElement(element.type);
  RecElement.classList.add(element.className);
  RecElement.id = rec.id;
  RecElement.innerHTML = `
        <a href="${rec.url}" target="_blank">
          <div class="rec-thumb">
            
          
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
  return RecElement;
}
