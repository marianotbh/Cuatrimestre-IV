import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { VehiculoService } from "../../servicios/vehiculo.service";

@Component({
  selector: "app-card-boton",
  templateUrl: "./card-boton.component.html",
  styleUrls: ["./card-boton.component.css"]
})
export class CardBotonComponent implements OnInit {
  public vehiculoService: VehiculoService;

  @Input()
  id: number;
  @Output()
  eventVehiculoEliminado:EventEmitter<any> = new EventEmitter();


  constructor(vehiculoService: VehiculoService) {
    this.vehiculoService = vehiculoService;
  }

  ngOnInit() {}

  Eliminar() {
    this.vehiculoService.Eliminar(this.id).subscribe(data => {
      this.eventVehiculoEliminado.emit(this.id);
    });
  }
}
