import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcourseComponent } from './formcourse.component';

describe('FormcourseComponent', () => {
  let component: FormcourseComponent;
  let fixture: ComponentFixture<FormcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
