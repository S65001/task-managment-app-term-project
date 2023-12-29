import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort"




const material: any = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatSidenavModule,
  MatToolbarModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatSidenavModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatGridListModule,
  MatRadioModule,
  MatPaginatorModule,
  CommonModule,
  MatTableModule,
  MatSortModule,
  
];


@NgModule({
  declarations: [],
  imports: material,
  exports: material
})
export class MaterialModule { }
