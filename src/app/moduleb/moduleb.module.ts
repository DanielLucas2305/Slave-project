import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulebRoutingModule } from './moduleb-routing.module';
import { ModulebComponent } from './moduleb.component';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    ModulebComponent
  ],
  imports: [
    CommonModule,
    ModulebRoutingModule,
    DialogModule,
  ]
})
export class ModulebModule { }
