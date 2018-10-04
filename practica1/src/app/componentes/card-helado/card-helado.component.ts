import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-helado',
  templateUrl: './card-helado.component.html',
  styleUrls: ['./card-helado.component.css']
})
export class CardHeladoComponent implements OnInit {

  @Input() id:string;
  @Input() sabor:string;
  @Input() tipo:string;
  @Input() cantidad:number;
  @Input() foto:string;
  @Output() eventPassHeladoEliminado:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.foto = "./assets/img/" + this.foto + ".jpg";
  }

  PassEvent($event) {
    this.eventPassHeladoEliminado.emit($event);
  }
}
