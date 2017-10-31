import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpapisComponent } from './httpapis.component';

describe('HttpapisComponent', () => {
  let component: HttpapisComponent;
  let fixture: ComponentFixture<HttpapisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpapisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
