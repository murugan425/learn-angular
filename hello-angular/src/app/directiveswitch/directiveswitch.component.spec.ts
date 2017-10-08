import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveswitchComponent } from './directiveswitch.component';

describe('DirectiveswitchComponent', () => {
  let component: DirectiveswitchComponent;
  let fixture: ComponentFixture<DirectiveswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
