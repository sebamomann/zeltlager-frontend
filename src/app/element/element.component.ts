import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  private elementId = undefined;
  public element = undefined;

  public childrenDepth = 1;

  public baseUrl = environment.BASE_URL;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.route.paramMap.subscribe((params) => {
      this.elementId = params.get("id");

      this.route.snapshot.queryParamMap.get("childrenDepth");

      this.fetchData();
    });
  }

  childrenDepthChange($event) {
    this.childrenDepth = $event.target.value;
    this.fetchData();
  }

  public fetchData() {
    this.httpClient.get(environment.API_URL + "elements/" + this.elementId, { params: { children: "true", parents: "true", "childrenDepth": String(this.childrenDepth), "parentsDepth": "1" } })
      .subscribe((data) => {
        this.element = data;
      })
  }

  ngOnInit() {
  }

}
