export class Vehiculo {
    public id:number;
    public marca:string;
    public modelo:string;
    public cantidadPuertas:number;
    public RutaDeFoto:string;

    public constructor(id:number, marca:string, modelo:string, cantidadPuertas:number, RutaDeFoto:string = "") {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadPuertas = cantidadPuertas;
        this.RutaDeFoto = RutaDeFoto;
    }
}
