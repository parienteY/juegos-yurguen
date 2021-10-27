import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { JuegoComponent } from './juego/juego.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    FiltroPipe,
    JuegoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class PagesModule { }
