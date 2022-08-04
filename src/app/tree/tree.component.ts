import { NestedTreeControl } from '@angular/cdk/tree';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public elements = undefined;

  constructor(private httpClient: HttpClient) {
    setTimeout(() => {
      this.elements = this.httpClient.get(environment.API_URL + "elements/roots");
    })
  }

  ngOnInit() {
  }
}
