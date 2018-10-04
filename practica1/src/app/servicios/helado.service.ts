import { Injectable } from "@angular/core";
import { map, catchError, tap } from "rxjs/operators";
import { MiHttpService } from "./mi-http.service";
import { Helado } from "../clases/helado";
import { throwError, Observable } from "rxjs";

@Injectable()
export class HeladoService {

  public action:string = 'helado';

  constructor(public miHttp: MiHttpService) {}

  public Consultar(id:string) : Observable<Helado> {
    return this.miHttp.httpGetOne<Helado>(this.action, id);
  }

  public ListarTodos() : Observable<Array<Helado>> {
    return this.miHttp.httpGetAll<Helado>(this.action);
  }

  public Cargar(helado:Helado):Observable<Helado> {
    return this.miHttp.httpPost<Helado>(this.action, helado);
  }

  public Modificar(helado:Helado):Observable<Helado> {
    return this.miHttp.httpUpdate<Helado>(this.action, helado);
  }

  public Eliminar(id:number) {
    return this.miHttp.httpDelete(this.action, id);
  }
}
