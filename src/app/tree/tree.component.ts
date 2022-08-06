import { NestedTreeControl } from '@angular/cdk/tree';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ElementSettingsDialogComponent } from '../element/element-settings-dialog/element-settings-dialog.component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  private timeout;
  private searchString;

  public elements = undefined;

  constructor(private httpClient: HttpClient, private dialog: MatDialog) {
    this.fetch()
  }

  public fetch() {
    this.elements = this.httpClient.get(environment.API_URL + "elements/roots");
  }

  ngOnInit() {
  }

  change(input) {
    this.searchString = input;

    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.fetchData();
    }, 300)
  }

  public fetchData() {
    if (!this.searchString || this.searchString == "") {
      this.fetch();
      return;
    }

    const localStorageData = localStorage.getItem("elementSettings");
    const localStorageDataJson = localStorageData ? JSON.parse(localStorageData) : { childrenDepth: 1, parentDepth: 1 };

    this.elements = this.httpClient.get(environment.API_URL + "elements", {
      params: {
        name: this.searchString,
        children: "true",
        parents: "true",
        "childrenDepth": String(localStorageDataJson.childrenDepth),
        "parentDepth": String(localStorageDataJson.parentDepth)
      }
    })

    this.elements.subscribe(data => console.log(data))
  };

  public isFilledArray(elements) {
    return (elements as any[]).length > 0;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ElementSettingsDialogComponent, {
      width: '250px',
      data: { prefix: "tree" }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchData();
    });
  }
}
