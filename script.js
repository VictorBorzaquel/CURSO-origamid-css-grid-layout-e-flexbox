const sectionFlex1 = document.querySelector('.flex1')
const sectionGrid1 = document.querySelector('.grid1')
const sectionGrid2 = document.querySelector('.grid2')
const sectionGrid3 = document.querySelector('.grid3')

constructLayout(sectionFlex1, 6)
constructLayout(sectionGrid1, 9, 1)
constructLayout(sectionGrid2, 4)
constructLayout(sectionGrid3, 2)

function constructLayout(htmlItem, repeatNumber, addsNumber) {
  let htmlResult = "";
  if (htmlItem === sectionGrid2) {
    htmlResult += `
      <div class="video">
        <img src="./img/lobo${Math.floor(Math.random() * 3 + 1)}.jpg">
        <h2>Como criar sites.</h2>
      </div>
      <div class="sidebar">
    `;
  }
  if (htmlItem === sectionGrid3) {
    htmlResult += `
      <div class="grid3-item">
        <img src="./img/lobo4.jpg">
        <p>Legenda</p>
      </div>
    `;
    for (let i = 0; i < repeatNumber; i++) {
      htmlResult += `
        <div class="grid3-item">
          <img src="./img/lobo${Math.floor(Math.random() * 3 + 1)}.jpg">
          <p>Legenda</p>
        </div>
      `;
    }
  } else {
    for (let i = 0; i < repeatNumber; i++) {
    htmlResult += `
      <div>
        <img src="./img/lobo${Math.floor(Math.random() * 3 + 1)}.jpg">
        <p>Legenda</p>
      </div>
    `;
  }
  }
  
  
  for (let i = 0; i < addsNumber; i++) {
      htmlResult += `
      <div class="anuncio">
        <img src="./img/lobo${Math.floor(Math.random() * 3 + 1)}.jpg">
        <p>Anuncio</p>
      </div>
    `;
  }
  if (htmlItem === sectionGrid2) htmlResult += `</div>`;

  htmlItem.innerHTML = htmlResult
}

