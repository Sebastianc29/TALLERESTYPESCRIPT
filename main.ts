import { series } from './Data.js';

import {Serie} from "./Serie.js";

const TablaBodySeries: HTMLElement = document.getElementById("TablaBodySeries")!;
const promedioText: HTMLElement = document.getElementById("promedio")!;

function TablaDeSeries(series: Serie[]):void{
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
}
 
TablaDeSeries(series);