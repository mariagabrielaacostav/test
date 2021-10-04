import { Component, OnInit, ViewChild } from '@angular/core';
import { EstudiantesService } from '../../../services/estudiantes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable} from '@angular/material/table';

import {MatTableDataSource} from '@angular/material/table';

 @Component({
   selector: 'app-estudiantes',
   templateUrl: './estudiantes.component.html',
   styleUrls: ['./estudiantes.component.css']
 })
export class EstudiantesComponent implements OnInit {

	dataestudiantes: any = [];
	columnsToDisplay = ['name','patronus','age', 'image'];


	 dataSource!: MatTableDataSource<any>;
	 @ViewChild(MatPaginator) paginator!: MatPaginator;
	 @ViewChild(MatSort) sort!: MatSort;
	 @ViewChild(MatTable) table!: MatTable<any>;


	constructor(public web: EstudiantesService) {
		 this.web.GetTodos().subscribe(x => {
			 this.dataestudiantes = x;

			 // calculo de edad - el json trae el año pero no la edad actual
			 var year = new Date().getFullYear();
			 for (let item in this.dataestudiantes){
					 this.dataestudiantes[item].yearOfBirth= year - this.dataestudiantes[item].yearOfBirth;
					 if(this.dataestudiantes[item].yearOfBirth== year){
							this.dataestudiantes[item].yearOfBirth = "--";
					 }
			 }
		});
	 }


  ngOnInit(): void {
  }


	applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
