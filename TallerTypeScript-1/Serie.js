export class Serie {
    numero;
    nombre;
    canal;
    temporadas;
    descripcion;
    link;
    linkImagen;
    constructor(numero, nombre, canal, temporadas, descripcion, link, linkImagen) {
        this.numero = numero;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.link = link;
        this.linkImagen = linkImagen;
    }
}