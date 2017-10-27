import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsignupComponent } from './formsignup.component';

describe('FormsignupComponent', () => {
  let component: FormsignupComponent;
  let fixture: ComponentFixture<FormsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
