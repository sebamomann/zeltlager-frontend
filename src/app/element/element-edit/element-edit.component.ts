import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-element-edit',
  templateUrl: './element-edit.component.html',
  styleUrls: ['./element-edit.component.scss']
})
export class ElementEditComponent implements OnInit {

  private elementId = undefined;
  public element = undefined;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) {
    console.log("lol")
    this.route.paramMap.subscribe((params) => {
      console.log(params)
      this.elementId = params.get("id");

      this.element = this.httpClient.get(environment.API_URL + "elements/" + this.elementId, { params: { children: "true", parents: "true", "childrenDepth": "1", "parentsDepth": "1" } })
    });
  }

  ngOnInit() {
  }

  update(element) {
    this.httpClient.put(environment.API_URL + "elements/" + this.elementId, element)
      .subscribe(() => {
        this.router.navigate(["/element/" + this.elementId]);
      });
  }

}
