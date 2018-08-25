import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-mind-item',
  templateUrl: './simple-mind-item.component.html',
  styleUrls: ['./simple-mind-item.component.scss']
})
export class SimpleMindItemComponent implements OnInit {

  @Input()
  node: any;

  constructor() {
  }

  ngOnInit() {
  }

  addNode(event, node: any) {
    event.stopPropagation();
    console.info(node);
  }

  delNode(event, node: any) {
    event.stopPropagation();
    console.info(node);
  }

  viewNode(node: any) {
    console.info('view');
  }
}
