import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnInit {


  @Input() elements: any;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = changes.elements.currentValue;
  }

  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  constructor() { }

  ngOnInit() {
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
}
