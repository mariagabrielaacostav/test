import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CrearEstudianteComponent } from './estudiantes/crear-estudiante/crear-estudiante.component';
import { NuevoEstudianteComponent } from './estudiantes/nuevo-estudiante/nuevo-estudiante.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    PersonajesComponent,
    ProfesoresComponent,
    EstudiantesComponent,
    CrearEstudianteComponent,
    NuevoEstudianteComponent,


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
		SharedModule
  ]
})
export class DashboardModule { }
