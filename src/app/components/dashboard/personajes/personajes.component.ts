import { Component, OnInit, ViewChild } from '@angular/core';
import {PersonajesService} from '../../../services/personajes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import { Router } from "@angular/router";
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
	data: any = [];
	columnsToDisplay = ['name','patronus','age', 'image'];

	url: string="";

	 dataSource!: MatTableDataSource<any>;
	 @ViewChild(MatPaginator) paginator!: MatPaginator;
	 @ViewChild(MatSort) sort!: MatSort;
	 @ViewChild(MatTable) table!: MatTable<any>;


  ngOnInit(): void {
		this.router.navigate(['/dashboard/personajes']);
		  this.getHouse();

	 }

//------Funcion para obtener la casa que deseamos consultar pasada como parametro por el url--------

getHouse(){
	this.url = window.location.href.split("personajes/")[1];
	//console.log("Casa "+this.url);
	this.web.getfinalhouse(this.url);
}


constructor(public web: PersonajesService,  private router: Router) {
	 this.web.GetTodos().subscribe(x => {
		 this.data = x;

		 // calculo de edad - el json trae el año pero no la edad actual
		 var year = new Date().getFullYear();
		 for (let item in this.data){
				 this.data[item].yearOfBirth= year - this.data[item].yearOfBirth;
				 if(this.data[item].yearOfBirth== year){
						this.data[item].yearOfBirth = "--";
				 }
		 }
	});
 }


	applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
