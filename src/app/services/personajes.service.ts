import { Injectable } from '@angular/core';
import { HttpClient }  from "@angular/common/http";
import { Observable } from 'rxjs';

export interface todo{
	name: string,
	patronus: string,
	age: number,
	img: any,

}


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

	url :string="";
	house: string="";


	apiUrl = 'http://hp-api.herokuapp.com/api/characters/house/';


  constructor(private http: HttpClient){	}


	getfinalhouse(url: string){
		this.house=url;
	}




	GetTodos(): Observable<todo[]>{
		return this.http.get<todo[]>(this.apiUrl+this.house);
	}






}
