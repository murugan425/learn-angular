import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybind',
  templateUrl: './propertybind.component.html',
  styleUrls: ['./propertybind.component.css']
})
export class PropertybindComponent implements OnInit {

  private title = 'Sample Image - PROPERTY BINDING';

  get TITLE() {
    return this.title;
  }

  imageUrl = 'http://dummyimage.com/400x200/87CEEB/FFFFFF';
  constructor() { }

  ngOnInit() {
  }

}
