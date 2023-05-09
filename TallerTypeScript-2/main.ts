import { series } from './Data.js';

import {Serie} from "./Serie.js";

const TablaBodySeries: HTMLElement = document.getElementById("TablaBodySeries")!;
const promedioText: HTMLElement = document.getElementById("promedio")!;
const card = document.getElementById("Serie")!;

function Tabla(series: Serie[]):void{
    let promedio = 0;
    series.forEach(serie => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td> ${serie.numero} </td>
                                <td> ${serie.nombre} </td>
                              <td> ${serie.canal} </td>
                              <td> ${serie.temporadas} </td>`;
                TablaBodySeries.appendChild(tableRow);
        promedio += serie.temporadas;
    });
    
    promedio /= series.length;
    promedioText.innerHTML = `seasons average: ${promedio}`;

    const serieNames = document.querySelectorAll('.serie-name');
  serieNames.forEach((name) => {
    name.addEventListener('click', (event) => {
      const serieName = (event.target as HTMLElement).innerText;
      addCard(serieName);
    });
  });
}



function findSerie(serie: string): Serie | null {
    for (let i = 0; i < series.length; i++) {
      if (series[i].nombre === serie) {
        return series[i];
      }
    }
    return null;
  }

function addCard(serieNom: string): void{
    const serie = findSerie(serieNom);

    const imagen = serie?.linkImagen;
    const titulo = serie?.nombre;
    const descripcion = serie?.descripcion;
    const url = serie?.link;
    const cardHTML = `
      <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="${imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${descripcion}</p>
          <a href="${url}">Más información</a>
        </div>
      </div>
    `;
  
    card.innerHTML = cardHTML;
}
Tabla(series);