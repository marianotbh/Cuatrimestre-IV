import { Injectable } from "@angular/core";
import { map, catchError, tap } from "rxjs/operators";
import { MiHttpService } from "./mi-http.service";
import { Vehiculo } from "../clases/vehiculo";
import { throwError, Observable } from "rxjs";

@Injectable()
export class VehiculoService {

  public action:string = 'vehiculo';

  constructor(public miHttp: MiHttpService) {}

  public Consultar(id:string) : Observable<Vehiculo> {
    return this.miHttp.httpGetOne<Vehiculo>(this.action, id);
  }

  public ListarTodos() : Observable<Array<Vehiculo>> {
    return this.miHttp.httpGetAll<Vehiculo>(this.action);
  }

  public Cargar(vehiculo:Vehiculo):Observable<Vehiculo> {
    return this.miHttp.httpPost<Vehiculo>(this.action, vehiculo);
  }

  public Modificar(vehiculo:Vehiculo):Observable<Vehiculo> {
    return this.miHttp.httpUpdate<Vehiculo>(this.action, vehiculo);
  }

  public Eliminar(id:number) {
    return this.miHttp.httpDelete(this.action, id);
  }
}
