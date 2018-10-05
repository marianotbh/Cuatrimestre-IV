import { Component, OnInit, Input } from '@angular/core';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { Vehiculo } from '../../clases/vehiculo';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-listado-vehiculo',
  templateUrl: './listado-vehiculo.component.html',
  styleUrls: ['./listado-vehiculo.component.css']
})
export class ListadoVehiculoComponent implements OnInit {
  public vehiculos: Array<Vehiculo>;
  public vehiculoService: VehiculoService;
  public formCargarDisplay:boolean = false;
  public formBuscarDisplay:boolean = false;
  public mostrar:boolean = false;
  public marca:string;
  public modelo:string;
  public foto:string;
  public puertas:number;

  constructor(vehiculoService: VehiculoService) {
    this.vehiculos = new Array<Vehiculo>();
    this.vehiculoService = vehiculoService;
  }

  ngOnInit() {
    this.Refresh();
  }

  Refresh() {
    this.vehiculoService.ListarTodos().subscribe(data => {
      this.vehiculos = data;
    });
  }

  btnCargarClick() {
    this.formCargarDisplay = !this.formCargarDisplay;
  }

  btnBuscarClick() {
    this.formBuscarDisplay = !this.formBuscarDisplay;
  }

  Mostrar(event) {
    this.marca = event.marca;
    this.mostrar = !this.mostrar;
    this.modelo = event.modelo;
    this.puertas = event.cantidadPuertas;
  }
}
