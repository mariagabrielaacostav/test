import { Component, OnInit, ViewChild } from '@angular/core';
import {ProfesoresService} from '../../../services/profesores.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

	dataprofesores: any = [];
	columnsToDisplay = ['name','patronus','age', 'image'];

	 @ViewChild(MatPaginator) paginator!: MatPaginator;
	 @ViewChild(MatSort) sort!: MatSort;
	 @ViewChild(MatTable) table!: MatTable<any>;


	constructor(public web: ProfesoresService) {
		 this.web.GetTodos().subscribe(x => {
			 this.dataprofesores = x;

			 // calculo de edad - el json trae el año pero no la edad actual
			 var year = new Date().getFullYear();
			 for (let item in this.dataprofesores){
				   this.dataprofesores[item].yearOfBirth= year - this.dataprofesores[item].yearOfBirth;
				   if(this.dataprofesores[item].yearOfBirth== year){
						 	this.dataprofesores[item].yearOfBirth = "--";
					 }
			 }
		});
	 }

  ngOnInit(): void {
	}


			dataSource = new MatTableDataSource(this.dataprofesores);

			applyFilter(event: Event) {
			 const filterValue = (event.target as HTMLInputElement).value;
			 this.dataSource.filter = filterValue.trim().toLowerCase();
			}

}
