import { MatCardModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementEditComponent } from './element-edit.component';
import { ElementFormModule } from '../element-form/element-form.module';

const routes: Routes = [
  { path: '', component: ElementEditComponent },
]

@NgModule({
  declarations: [ElementEditComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ElementFormModule,
    MatCardModule
  ]
})
export class ElementEditModule { }
