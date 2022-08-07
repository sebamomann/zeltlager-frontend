import { QrCodeDialogModule } from './qr-code-dialog/qr-code-dialog.module';
import { ElementSettingsDialogComponent } from './element-settings-dialog/element-settings-dialog.component';
import { FormsModule } from '@angular/forms';
import { ElementSettingsDialogModule } from './element-settings-dialog/element-settings-dialog.module';
import { TreeListModule } from './../tree/tree-list/tree-list.module';
import { MatIconModule, MatButtonModule, MatInputModule, MatDialogModule, MatCardModule, MatCardHeader } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './element.component';
import { QrCodeDialogComponent } from './qr-code-dialog/qr-code-dialog.component';

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
    MatInputModule,
    MatDialogModule,
    ElementSettingsDialogModule,
    MatCardModule,
    QrCodeDialogModule
  ],
  entryComponents: [ElementSettingsDialogComponent, QrCodeDialogComponent]
})
export class ElementModule { }
