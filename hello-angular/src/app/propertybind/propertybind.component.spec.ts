import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindComponent } from './propertybind.component';

describe('PropertybindComponent', () => {
  let component: PropertybindComponent;
  let fixture: ComponentFixture<PropertybindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertybindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertybindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
