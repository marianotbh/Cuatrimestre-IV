import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListadoHeladosComponent } from "./componentes/listado-helados/listado-helados.component";
import { CardHeladoComponent } from "./componentes/card-helado/card-helado.component";
import { CardBotonComponent } from "./componentes/card-boton/card-boton.component";
import { HttpClientModule } from "@angular/common/http";
import { MiHttpService } from "./servicios/mi-http.service";
import { HeladoService } from "./servicios/helado.service";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { FormCargarHeladoComponent } from "./componentes/form-cargar-helado/form-cargar-helado.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuscarHeladoComponent } from './componentes/form-buscar-helado/form-buscar-helado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoHeladosComponent,
    CardHeladoComponent,
    CardBotonComponent,
    InicioComponent,
    FormCargarHeladoComponent,
    FormBuscarHeladoComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [MiHttpService, HeladoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
