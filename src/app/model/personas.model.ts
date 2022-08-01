export class personas{
    id?:number;
    nombre:string;
    apellido:string;
    img:string;
    profesion:string;
    ubicacion:string;

    constructor (nombre:string, apellido: string, img:string, profesion:string, ubicacion:string) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.img = img;
       this.profesion = profesion;
       this.ubicacion = ubicacion;
    }
}