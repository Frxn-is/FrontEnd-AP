import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { PortafolioService } from './servicios/portafolio.service';

import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EstudiosService } from './servicios/estudios.service';
import { ExperienciaService } from './servicios/experiencia.service';
import { HttpClientModule } from '@angular/common/http';
import { PortadaComponent } from './componentes/portada/portada.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';


@NgModule({
  declarations: [
    AppComponent,
    EstudiosComponent,
    PerfilComponent,
    SkillsComponent,
    NavBarComponent,
    ExperienciaComponent,
    IniciarSesionComponent,
    PortafolioComponent,
    PortadaComponent,
    ProyectosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    PortafolioService,
    EstudiosService,
    ExperienciaService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
