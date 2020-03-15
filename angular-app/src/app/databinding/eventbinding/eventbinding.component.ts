import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent implements OnInit {
  textValue = 'Not Entered';

  constructor() { }

  ngOnInit(): void {
  }

  updateInput(event: Event) {
    this.textValue = (event.target as HTMLInputElement).value;
  }

}
