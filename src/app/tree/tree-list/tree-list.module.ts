import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeListComponent } from './tree-list.component';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';



@NgModule({
  declarations: [TreeListComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [TreeListComponent]
})
export class TreeListModule { }
