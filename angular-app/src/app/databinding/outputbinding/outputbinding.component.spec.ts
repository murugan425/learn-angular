import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputbindingComponent } from './outputbinding.component';

describe('OutputbindingComponent', () => {
  let component: OutputbindingComponent;
  let fixture: ComponentFixture<OutputbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
