import { series } from './Data.js';
const TablaBodySeries = document.getElementById("TablaBodySeries");
const promedio = document.getElementById("promedio");
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
}
Tabla(series);
