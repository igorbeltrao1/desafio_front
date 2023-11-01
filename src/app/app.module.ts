import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './views/home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContaCreateComponent } from './components/conta/conta-create/conta-create.component';
import { ContaReadComponent } from './components/conta/conta-read/conta-read.component';
import { MatTableModule } from '@angular/material/table';
import { ContaCrudComponent } from './views/conta-crud/conta-crud.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { ContaDeleteComponent } from './components/conta/conta-delete/conta-delete.component';
import { ContaUpdateComponent } from './components/conta/conta-update/conta-update.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ContaCreateComponent,
    ContaReadComponent,
    ContaCrudComponent,
    ContaDeleteComponent,
    ContaUpdateComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule, 
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule, 
    CommonModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
