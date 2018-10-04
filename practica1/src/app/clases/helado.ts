export class Helado {
    public id:number;
    public sabor:string;
    public tipo:string;
    public cantidad:number;
    public foto:string;

    public constructor(id:number, sabor:string, tipo:string, cantidad:number, foto:string = "") {
        this.id = id;
        this.sabor = sabor;
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.foto = foto;
    }
}
