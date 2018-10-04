import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HeladoService } from "../../servicios/helado.service";
import { Helado } from "../../clases/helado";

@Component({
  selector: "app-form-buscar-helado",
  templateUrl: "./form-buscar-helado.component.html",
  styleUrls: ["./form-buscar-helado.component.css"]
})
export class FormBuscarHeladoComponent implements OnInit {
  public input: string;
  public sabor: string;
  public cantidad: number;
  public tipo: string;
  public foto: string;
  public heladoService: HeladoService;
  public encontrado: boolean = false;

  @Input()
  show: boolean;
  @Output()
  eventHeladoEncontrado: EventEmitter<Helado> = new EventEmitter();
  @Output()
  eventHeladoSinStock: EventEmitter<Helado> = new EventEmitter();
  @Output()
  eventHeladoNoEncontrado: EventEmitter<string> = new EventEmitter();

  constructor(heladoService: HeladoService) {
    this.heladoService = heladoService;
  }

  ngOnInit() {}

  BuscarHelado() {
    this.heladoService.Consultar(this.input).subscribe(data => {
      if (data != null && data[0].cantidad != 0) {
        this.encontrado = true;
        this.sabor = data[0].sabor;
        this.foto = "./assets/img/" + data[0].foto + ".jpg";
        this.tipo = data[0].tipo;
        this.cantidad = data[0].cantidad;
        this.eventHeladoEncontrado.emit();
        console.log(data[0]);
      } else if (data[0].cantidad == 0) {
        this.encontrado = false;
        this.eventHeladoSinStock.emit(data[0]);
      } else {
        this.encontrado = false;
        this.eventHeladoNoEncontrado.emit(this.input);
      }
    });
  }
}
