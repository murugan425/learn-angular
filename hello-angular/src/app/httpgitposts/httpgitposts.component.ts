import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { HttpgitpostsService } from './httpgitposts.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-httpgitposts',
  templateUrl: './httpgitposts.component.html',
  styleUrls: ['./httpgitposts.component.css']
})
export class HttpgitpostsComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: HttpgitpostsService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combResp => {
      const id_param = combResp[0].get('id');
      const name_param = combResp[0].get('name');
      console.log(id_param + '::::' + name_param);
      const page_queryparam = combResp[1].get('page');
      const order_queryparam = combResp[1].get('order');
      console.log(page_queryparam + '::::' + order_queryparam);
      return this.service.getAll();
    })
    .subscribe(followers => {
      this.followers = followers;
      console.log(followers);
    });

    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get('id') + '::::' + params.get('username'));
    // });

    // this.route.queryParamMap.subscribe(params => {
    //   console.log(params.get('page') + '::::' + params.get('order'));
    // });
  }

}
