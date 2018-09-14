import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Tema } from '../../entidades/tema';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent {
  @Input() tema: Tema;
  public cuestionario: string;

  @Output() emisor:EventEmitter<any> = new EventEmitter();

  counter:number;

  constructor() {
    this.cuestionario = 'preguntas:';
    this.counter = 0;
  }

  clickity(event) {
    this.emisor.emit();
  }
}
