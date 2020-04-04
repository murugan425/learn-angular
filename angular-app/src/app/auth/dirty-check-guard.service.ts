import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirtyCheckGuardService implements CanDeactivate<DirtyComponent> {

  constructor() { }

  canDeactivate(component: DirtyComponent, currentroute: ActivatedRouteSnapshot, currentstate: RouterStateSnapshot,
                nextstate?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}

export interface DirtyComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
