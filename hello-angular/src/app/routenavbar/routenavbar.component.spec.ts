import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutenavbarComponent } from './routenavbar.component';

describe('RoutenavbarComponent', () => {
  let component: RoutenavbarComponent;
  let fixture: ComponentFixture<RoutenavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
