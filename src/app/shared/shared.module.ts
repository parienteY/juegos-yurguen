import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidevarComponent } from './sidevar/sidevar.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SidevarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports:[
    SidevarComponent
  ]
})
export class SharedModule { }
