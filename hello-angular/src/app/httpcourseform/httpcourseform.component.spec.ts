import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpcourseformComponent } from './httpcourseform.component';

describe('HttpcourseformComponent', () => {
  let component: HttpcourseformComponent;
  let fixture: ComponentFixture<HttpcourseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpcourseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpcourseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
