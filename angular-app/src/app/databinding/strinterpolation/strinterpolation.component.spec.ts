import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrinterpolationComponent } from './strinterpolation.component';

describe('StrinterpolationComponent', () => {
  let component: StrinterpolationComponent;
  let fixture: ComponentFixture<StrinterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrinterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrinterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
