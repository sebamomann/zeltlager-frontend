import { TreeListModule } from './tree-list/tree-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatIconModule, MatTreeModule, MatInputModule, MatFormFieldModule } from '@angular/material';

const routes: Routes = [
  { path: '**', component: TreeComponent },
];

@NgModule({
  declarations: [TreeComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    TreeListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class TreeModule { }
