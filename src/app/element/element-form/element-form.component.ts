import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.scss']
})
export class ElementFormComponent implements OnInit {
  @ViewChild('select', { static: true }) select: any;

  @Output() public save = new EventEmitter<any>();
  @Input() public element;
  @Input() public edit;

  public elementForm: FormGroup;
  public searchedElements: any = []

  constructor(private httpClient: HttpClient) {
    this.elementForm = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      description: new FormControl(''),
      parent: new FormControl('')
    });
  }

  ngOnInit() {
    if (this.element) {
      this.elementForm.get("name").setValue(this.element.name)
      this.elementForm.get("number").setValue(this.element.number)
      this.elementForm.get("description").setValue(this.element.description)

      if (this.element.parent) {
        this.elementForm.get("parent").setValue(this.element.parent.id)
      }
    }

    this.select._handleKeydown = (event: KeyboardEvent) => {
      if (event.key == "SPACE")
        return
    }
  }

  async onKey(value: string) {
    this.httpClient.get(environment.API_URL + "elements", { params: { name: value, parent: "false", children: "false" } }).subscribe((elements) => {
      this.searchedElements = elements;
    })
  }

  submitForm() {
    const object: any = {
      name: this.elementForm.get("name").value,
      description: this.elementForm.get("description").value,
      number: this.elementForm.get("number").value,
    }

    if (this.elementForm.get("parent").value != 0) {
      object.parent = { id: this.elementForm.get("parent").value }
    }

    this.save.emit(object)
  }

}
