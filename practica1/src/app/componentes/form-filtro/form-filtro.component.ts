import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { VehiculoService } from "../../servicios/vehiculo.service";
import { Vehiculo } from "../../clases/vehiculo";

@Component({
  selector: "app-form-filtro",
  templateUrl: "./form-filtro.component.html",
  styleUrls: ["./form-filtro.component.css"]
})
export class FormFiltroComponent implements OnInit {
  public input: string;
  public marca: string;
  public cantidadPuertas: number;
  public modelo: string;
  public RutaDeFoto: string;
  public vehiculoService: VehiculoService;
  public encontrado: boolean = false;
  public output: string;

  @Input()
  show: boolean;
  @Output()
  eventVehiculoEncontrado: EventEmitter<Vehiculo> = new EventEmitter();
  @Output()
  eventVehiculoSinStock: EventEmitter<Vehiculo> = new EventEmitter();
  @Output()
  eventVehiculoNoEncontrado: EventEmitter<string> = new EventEmitter();

  constructor(vehiculoService: VehiculoService) {
    this.vehiculoService = vehiculoService;
  }

  ngOnInit() { }

  BuscarVehiculo() {
    this.vehiculoService.Consultar(this.input).subscribe(data => {
      if (data[0] != null) {
        this.encontrado = true;
        this.marca = data[0].marca;
        this.RutaDeFoto = "./assets/img/" + data[0].foto + ".jpg";
        this.modelo = data[0].modelo;
        this.cantidadPuertas = data[0].cantidadPuertas;
        this.eventVehiculoEncontrado.emit(new Vehiculo(null, this.marca, this.modelo, this.cantidadPuertas, this.RutaDeFoto));
        console.log(data[0]);
      }
      else {
        this.encontrado = false;
        this.output = "No encontrado";
        this.eventVehiculoNoEncontrado.emit(this.input);
      }
    });
  }
}
