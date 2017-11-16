import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBoardComponent } from './counter-board.component';

describe('CounterBoardComponent', () => {
  let component: CounterBoardComponent;
  let fixture: ComponentFixture<CounterBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
