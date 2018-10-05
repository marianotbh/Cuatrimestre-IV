import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-vehiculo',
  templateUrl: './card-vehiculo.component.html',
  styleUrls: ['./card-vehiculo.component.css']
})
export class CardVehiculoComponent implements OnInit {

  @Input() id:string;
  @Input() marca:string;
  @Input() modelo:string;
  @Input() cantidadPuertas:number;
  @Input() RutaDeFoto:string;
  @Output() eventPassVehiculoEliminado:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.RutaDeFoto = "./assets/img/vehiculos/" + this.RutaDeFoto + ".jpg";
  }

  PassEvent($event) {
    this.eventPassVehiculoEliminado.emit($event);
  }
}
