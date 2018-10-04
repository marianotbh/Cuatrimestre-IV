import { Component, OnInit, Input } from '@angular/core';
import { HeladoService } from '../../servicios/helado.service';
import { Helado } from '../../clases/helado';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-listado-helados',
  templateUrl: './listado-helados.component.html',
  styleUrls: ['./listado-helados.component.css']
})
export class ListadoHeladosComponent implements OnInit {
  public helados:Array<Helado>;
  public heladoService:HeladoService;
  public formCargarDisplay:boolean = false;
  public formBuscarDisplay:boolean = false;

  constructor(heladoService:HeladoService) {
    this.helados = new Array<Helado>();
    this.heladoService = heladoService
  }

  ngOnInit() {
    this.Refresh();
  }

  Refresh() {
    this.heladoService.ListarTodos().subscribe(data => {
      this.helados = data;
    });
  }

  btnCargarClick() {
    this.formCargarDisplay = !this.formCargarDisplay;
  }

  btnBuscarClick() {
    this.formBuscarDisplay = !this.formBuscarDisplay;
  }
}
