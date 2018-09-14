import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { CuestionarioComponent } from './componentes/cuestionario/cuestionario.component';
import { TemaComponent } from './componentes/tema/tema.component';
import { PreguntaComponent } from './componentes/pregunta/pregunta.component';
import { FormsModule } from '@angular/forms';

const router = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    CuestionarioComponent,
    TemaComponent,
    PreguntaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
