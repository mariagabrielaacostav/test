import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CrearEstudianteComponent } from './estudiantes/crear-estudiante/crear-estudiante.component';
import { NuevoEstudianteComponent } from './estudiantes/nuevo-estudiante/nuevo-estudiante.component';



const routes: Routes = [
	{path: '', component: DashboardComponent, children:[
		{path: '', component: InicioComponent},
		{path: 'personajes', component: PersonajesComponent},
		{path: 'personajes/:id?', component: PersonajesComponent},
		{path: 'profesores', component: ProfesoresComponent},
		{path: 'estudiantes', component: EstudiantesComponent},
		{path: 'crear-estudiante', component: CrearEstudianteComponent},
		{path: 'nuevo-estudiante', component: NuevoEstudianteComponent},

	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
