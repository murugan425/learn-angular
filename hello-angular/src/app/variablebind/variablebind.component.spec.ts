import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablebindComponent } from './variablebind.component';

describe('VariablebindComponent', () => {
  let component: VariablebindComponent;
  let fixture: ComponentFixture<VariablebindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablebindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablebindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
