import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteapiComponent } from './routeapi.component';

describe('RouteapiComponent', () => {
  let component: RouteapiComponent;
  let fixture: ComponentFixture<RouteapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
