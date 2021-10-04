import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//Angular Material
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'; //para filtro de las tablas
import {MatTooltipModule} from '@angular/material/tooltip'; //tooltip para usar menu
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'; //grid usado en crear_estudiante
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		MatSliderModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatToolbarModule,
		MatIconModule,
		HttpClientModule,
		MatTableModule,
		MatTooltipModule,
		MatPaginatorModule,
		MatSortModule,
		MatMenuModule,
		MatCardModule,
		MatGridListModule,
		MatSelectModule

  ],
	exports:[
		MatSliderModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatToolbarModule,
		MatIconModule,
		HttpClientModule,
		MatTableModule,
		MatTooltipModule,
		MatPaginatorModule,
		MatSortModule,
		MatMenuModule,
		MatCardModule,
		MatGridListModule,
		MatSelectModule

	]
})
export class SharedModule { }
