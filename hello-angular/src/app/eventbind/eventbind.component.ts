import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDivClick() { console.log('Save Btn Container/Div is clicked'); }

  onSaveEvent($event) {
    $event.stopPropagation(); // Avoid's the DIV click from being triggered.
    console.log('Save Action button is clicked' , $event); }
}
