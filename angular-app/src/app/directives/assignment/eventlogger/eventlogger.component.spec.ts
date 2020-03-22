import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventloggerComponent } from './eventlogger.component';

describe('EventloggerComponent', () => {
  let component: EventloggerComponent;
  let fixture: ComponentFixture<EventloggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventloggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
