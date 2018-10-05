import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CardBotonComponent } from "./componentes/card-boton/card-boton.component";
import { HttpClientModule } from "@angular/common/http";
import { MiHttpService } from "./servicios/mi-http.service";
import { VehiculoService } from "./servicios/vehiculo.service";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListadoVehiculoComponent } from './componentes/listado-vehiculo/listado-vehiculo.component';
import { CardVehiculoComponent } from './componentes/card-vehiculo/card-vehiculo.component';
import { FormAltaComponent } from './componentes/form-alta/form-alta.component';
import { FormFiltroComponent } from './componentes/form-filtro/form-filtro.component';
import { FilterResultComponent } from './componentes/filter-result/filter-result.component';
import { HighlightDirective } from './directives/highlight.directive';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MiRuteo = [
  { path: 'Login', component: LoginComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', component: InicioComponent }];

@NgModule({
  declarations: [
    AppComponent,
    CardBotonComponent,
    InicioComponent,
    ListadoVehiculoComponent,
    CardVehiculoComponent,
    FormAltaComponent,
    FormFiltroComponent,
    FilterResultComponent,
    HighlightDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MiRuteo)
  ],
  providers: [MiHttpService, VehiculoService],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
