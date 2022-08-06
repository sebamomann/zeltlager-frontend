import { element } from 'protractor';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnInit {

  @Input() treeNode: string;
  @Input() elements: any;

  ngOnChanges(changes: SimpleChanges) {
    this.manipulate();
  }

  treeControl = undefined;
  dataSource = new MatTreeNestedDataSource<any>();

  constructor() {
  }

  ngOnInit() {
    this.manipulate();
  }

  public manipulate() {
    if (!Array.isArray(this.elements)) {
      this.elements = [this.elements];
      this.elements = this.prepareElements(this.elements);
    }

    this.treeControl = new NestedTreeControl<any>(node => node[this.treeNode]);
    this.dataSource.data = this.elements
  }

  public prepareElements(elements) {
    console.log(JSON.stringify(elements))

    if (!elements[0]) {
      return [];
    }

    if (!elements[0][this.treeNode]) {
      elements[0][this.treeNode] = []
    } else {
      const ret = this.prepareElements([elements[0][this.treeNode]]);
      if (ret.length > 0) {
        elements[0][this.treeNode] = ret;
      }
    }

    return elements;
  }

  hasChild = (_: number, node: any) => !!node[this.treeNode] && node[this.treeNode].length > 0;
}
