import { Injectable } from '@angular/core';
import { HttpClient }  from "@angular/common/http";
import { Observable } from 'rxjs';

export interface todoprofesores{
	name: string,
	patronus: string,
	age: number,
	img: any,

}

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

	apiUrl = 'http://hp-api.herokuapp.com/api/characters/staff';

  constructor(private http: HttpClient){	}

	GetTodos(): Observable<todoprofesores[]>{
		return this.http.get<todoprofesores[]>(this.apiUrl);
	}

}
