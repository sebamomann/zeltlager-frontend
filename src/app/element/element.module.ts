import { TreeListModule } from './../tree/tree-list/tree-list.module';
import { MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './element.component';

const routes: Routes = [
  { path: 'create', loadChildren: "./element-create/element-create.module#ElementCreateModule" },
  { path: ':id/edit', loadChildren: "./element-edit/element-edit.module#ElementEditModule" },
  { path: ':id', component: ElementComponent },
];

@NgModule({
  declarations: [ElementComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    TreeListModule,
    MatInputModule
  ]
})
export class ElementModule { }
