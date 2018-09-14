import { Component } from '@angular/core';
import { Tema } from '../../entidades/tema';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})

export class TemaComponent {
  public tema:string = 'Temita';
  public temaCuestionario2:string = 'Tema2';
  public counter:number = 0;

  llego() {
    this.counter = this.counter + 1 ;
  }
}
