import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { VehiculoService } from "../../servicios/vehiculo.service";
import { Vehiculo } from "../../clases/vehiculo";

@Component({
  selector: "app-form-alta",
  templateUrl: "./form-alta.component.html",
  styleUrls: ["./form-alta.component.css"]
})

export class FormAltaComponent implements OnInit {
  public marca: string;
  public modelo: string;
  public cantidadPuertas: number;
  public RutaDeFoto: string;
  public vehiculoService: VehiculoService;

  @Input()
  show: boolean;
  @Output()
  onVehiculoCargado: EventEmitter<any> = new EventEmitter();

  constructor(vehiculoService: VehiculoService) {
    this.vehiculoService = vehiculoService;
  }

  ngOnInit() {}

  CargarVehiculo() {
    this.vehiculoService
      .Cargar(new Vehiculo(null, this.marca, this.modelo, this.cantidadPuertas, this.RutaDeFoto))
      .subscribe(data => {
        console.log(data);
        this.onVehiculoCargado.emit();
      });
  }
}
