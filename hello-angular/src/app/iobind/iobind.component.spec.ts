import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IobindComponent } from './iobind.component';

describe('IobindComponent', () => {
  let component: IobindComponent;
  let fixture: ComponentFixture<IobindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IobindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IobindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
