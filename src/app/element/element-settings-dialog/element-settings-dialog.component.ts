import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-element-settings-dialog',
  templateUrl: './element-settings-dialog.component.html',
  styleUrls: ['./element-settings-dialog.component.scss']
})
export class ElementSettingsDialogComponent implements OnInit {

  public tmpValueParent;
  public tmpValueChild;

  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<ElementSettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    const localStorageData = localStorage.getItem(this.data.prefix + "Settings");
    const localStorageDataJson = localStorageData ? JSON.parse(localStorageData) : { childrenDepth: 1, parentDepth: 1 };

    this.tmpValueChild = localStorageDataJson.childrenDepth;
    this.tmpValueParent = localStorageDataJson.parentDepth;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const settings = { childrenDepth: this.tmpValueChild, parentDepth: this.tmpValueParent };
    localStorage.setItem(this.data.prefix + "Settings", JSON.stringify(settings));

    this.dialogRef.close();
  }

  parentDepthChange($event) {
    this.tmpValueParent = $event.target.value;
  }

  childrenDepthChange($event) {
    this.tmpValueParent = $event.target.value;
  }

}
