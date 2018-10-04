import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HeladoService } from "../../servicios/helado.service";
import { Helado } from "../../clases/helado";

@Component({
  selector: "app-form-cargar-helado",
  templateUrl: "./form-cargar-helado.component.html",
  styleUrls: ["./form-cargar-helado.component.css"]
})
export class FormCargarHeladoComponent implements OnInit {
  public sabor: string;
  public tipo: string;
  public cantidad: number;
  public foto: string;
  public heladoService: HeladoService;

  @Input()
  show: boolean;
  @Output()
  onHeladoCargado: EventEmitter<any> = new EventEmitter();

  constructor(heladoService: HeladoService) {
    this.heladoService = heladoService;
  }

  ngOnInit() {}

  CargarHelado() {
    this.heladoService
      .Cargar(new Helado(null, this.sabor, this.tipo, this.cantidad, this.foto))
      .subscribe(data => {
        console.log(data);
        this.onHeladoCargado.emit();
      });
  }
}
