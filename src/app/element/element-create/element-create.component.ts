import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-element-create',
  templateUrl: './element-create.component.html',
  styleUrls: ['./element-create.component.scss']
})
export class ElementCreateComponent implements OnInit {

  public createdElement = undefined

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  create(element) {
    this.httpClient.post(environment.API_URL + "elements", element).subscribe((element) => {
      this.createdElement = element;
      setTimeout(() => {
        this.createdElement = undefined;
      }, 5000)
    })
  }

}
