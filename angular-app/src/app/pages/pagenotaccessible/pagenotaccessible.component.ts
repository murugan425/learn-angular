import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-pagenotaccessible',
  templateUrl: './pagenotaccessible.component.html',
  styleUrls: ['./pagenotaccessible.component.scss']
})
export class PagenotaccessibleComponent implements OnInit {

  errorCode: number;
  errorMsg: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.errorCode = data.errorCode;
        this.errorMsg = data.errorMsg;
      }
    );
  }

}
