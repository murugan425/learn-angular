import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcheckboxComponent } from './formcheckbox.component';

describe('FormcheckboxComponent', () => {
  let component: FormcheckboxComponent;
  let fixture: ComponentFixture<FormcheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
