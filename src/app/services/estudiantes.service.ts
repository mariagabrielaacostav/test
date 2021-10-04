import { Injectable } from '@angular/core';
import { HttpClient }  from "@angular/common/http";
import { Observable } from 'rxjs';
import { Estudiante } from "../interfaces/estudiantes";

export interface todoestudiantes{
	name: string,
	patronus: string,
	age: number
	//img: any,

}

@Injectable({
  providedIn: 'root'
})

export class EstudiantesService {

	inscritos: []=[];
	estudiante_nuevo: string ="";
	listEstudiantes: Estudiante[] = [];


	apiUrl = 'http://hp-api.herokuapp.com/api/characters/students';

  constructor(private http: HttpClient){	}

	GetTodos(): Observable<todoestudiantes[]>{
		//return this.http.get<todoestudiantes[]>(this.apiUrl);
		let inscritos =  this.http.get<todoestudiantes[]>(this.apiUrl);
		return inscritos;
  }


	agregarEstudiante(estudiante:Estudiante){
		this.listEstudiantes.unshift(estudiante);
		//console.log(this.listEstudiantes[0].name);
		}

		getUsuario(){
			return this.listEstudiantes.slice();
		}



}
