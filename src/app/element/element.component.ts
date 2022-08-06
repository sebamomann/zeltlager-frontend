import { ElementSettingsDialogComponent } from './element-settings-dialog/element-settings-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  private elementId = undefined;
  public element = undefined;

  public childrenDepth = 1;
  public parentDepth = 1;

  public baseUrl = environment.BASE_URL;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, public dialog: MatDialog) {
    this.route.paramMap.subscribe((params) => {
      this.elementId = params.get("id");

      this.route.snapshot.queryParamMap.get("childrenDepth");

      this.fetchData();
    });
  }

  public fetchData() {
    const localStorageData = localStorage.getItem("elementSettings");
    const localStorageDataJson = localStorageData ? JSON.parse(localStorageData) : { childrenDepth: 1, parentDepth: 1 };

    this.httpClient.get(environment.API_URL + "elements/" + this.elementId, { params: { children: "true", parents: "true", "childrenDepth": String(localStorageDataJson.childrenDepth), "parentDepth": String(localStorageDataJson.parentDepth) } })
      .subscribe((data) => {
        this.element = data;
      })
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ElementSettingsDialogComponent, {
      width: '250px',
      data: { prefix: "element" }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchData();
    });
  }
}
