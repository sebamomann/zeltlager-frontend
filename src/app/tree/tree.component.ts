import { NestedTreeControl } from '@angular/cdk/tree';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public searching;
  private timeout;
  public elements = undefined;

  constructor(private httpClient: HttpClient) {
    this.fetch()
  }

  public fetch() {
    this.searching = true;
    this.elements = this.httpClient.get(environment.API_URL + "elements/roots");
    this.elements.subscribe((data) => {
      this.searching = false;
    })
  }

  ngOnInit() {
  }

  change(input) {
    this.searching = true;

    if (this.timeout) clearTimeout(this.timeout);


    this.timeout = setTimeout(() => {
      if (input == "") {
        this.fetch();
        return;
      }

      this.elements = this.httpClient.get(environment.API_URL + "elements?name=" + input);
    }, 300)
  }

  public isFilledArray(elements) {
    return (elements as any[]).length > 0;
  }
}
