import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementSettingsDialogComponent } from './element-settings-dialog.component';
import { MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ElementSettingsDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [ElementSettingsDialogComponent]
})
export class ElementSettingsDialogModule { }
