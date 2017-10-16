import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveclassComponent } from './directiveclass.component';

describe('DirectiveclassComponent', () => {
  let component: DirectiveclassComponent;
  let fixture: ComponentFixture<DirectiveclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
