import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Estudiante } from 'src/app/interfaces/estudiantes';
import { EstudiantesService } from "src/app/services/estudiantes.service";

import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {
	age: any[] = ['11', '12','13', '14','15', '16','17', '18',];
	form: FormGroup;

	constructor( private fb: FormBuilder,
							 private _estudiantesService: EstudiantesService,
							 private router: Router,
							 private _snackBar: MatSnackBar)
		{
			this.form = this.fb.group({
				name: ['', Validators.required],
				patronus: ['', Validators.required],
				age: ['', Validators.required]
				//img: ['', Validators.required],
			})
	}

  ngOnInit(): void {
  }

	agregarEstudiante(){
		console.log(this.form.value);
		const estudiante: Estudiante = {
			name: this.form.value.name,
			patronus: this.form.value.patronus,
			age: this.form.value.age
			//image: this.form.value.image,
		}



		this._estudiantesService.agregarEstudiante(estudiante);

		this.router.navigate(['/dashboard/estudiantes']);


		this._snackBar.open('El estudiante ha sido agregado', '', {
				duration: 1500,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			});

	}

}
