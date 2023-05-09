import { series } from './Data.js';
const TablaBodySeries = document.getElementById("TablaBodySeries");
const promedio = document.getElementById("promedio");
const card = document.getElementById("Serie");

function Tabla(series) {
    let sumatoria = 0;
    series.forEach(serie => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td> ${serie.numero} </td>
                              <td class="text-primary"> ${serie.nombre}  </td>
                              <td> ${serie.canal} </td>
                              <td> ${serie.temporadas} </td>`;
                    tablabody.appendChild(tableRow);
            sumatoria += serie.temporadas;
    });
    sumatoria /= series.length;
    promedio.innerHTML = `  Seasons average: ${sumatoria}`;

    const serieNames = document.querySelectorAll('.serie-name');
  serieNames.forEach((name) => {
    name.addEventListener('click', (event) => {
      const serieName = event.target.innerText;
      addCard(serieName);
    });
  });
}
function findSerie(serie) {
    for (let i = 0; i < series.length; i++) {
      if (series[i].nombre === serie) {
        return series[i];
      }
    }
    return null;
  }

  function addCard(serieNom) {
    const { linkImagen, nombre, descripcion, link } = findSerie(serieNom);
  
    const cardHTML = `
      <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="${linkImagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${descripcion}</p>
          <a href="${link}">Más información</a>
        </div>
      </div>
    `;
  
    card.innerHTML = cardHTML;
  }

Tabla(series);