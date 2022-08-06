import { MatButtonModule, MatIconModule } from '@angular/material';
import { ElementFormModule } from './../element-form/element-form.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCreateComponent } from './element-create.component';

const routes: Routes = [
  { path: '', component: ElementCreateComponent },
]

@NgModule({
  declarations: [ElementCreateComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ElementFormModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ElementCreateModule { }
