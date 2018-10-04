import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HeladoService } from "../../servicios/helado.service";

@Component({
  selector: "app-card-boton",
  templateUrl: "./card-boton.component.html",
  styleUrls: ["./card-boton.component.css"]
})
export class CardBotonComponent implements OnInit {
  public heladoService: HeladoService;

  @Input()
  id: number;
  @Output()
  eventHeladoEliminado:EventEmitter<any> = new EventEmitter();


  constructor(heladoService: HeladoService) {
    this.heladoService = heladoService;
  }

  ngOnInit() {}

  Eliminar() {
    this.heladoService.Eliminar(this.id).subscribe(data => {
      this.eventHeladoEliminado.emit(this.id);
    });
  }
}
