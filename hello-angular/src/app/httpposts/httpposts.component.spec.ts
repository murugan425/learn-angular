import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttppostsComponent } from './httpposts.component';

describe('HttppostsComponent', () => {
  let component: HttppostsComponent;
  let fixture: ComponentFixture<HttppostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttppostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttppostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
