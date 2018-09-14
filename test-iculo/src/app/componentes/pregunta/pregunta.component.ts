import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})

export class PreguntaComponent {
  @Input() tema:string;
  @Input() cuestionario:string;
  Counter = 0;

  @Output() clic:EventEmitter<number> = new EventEmitter;

  clickerino() {
    this.clic.emit();
  }  
}
