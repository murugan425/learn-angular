import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivehiddenComponent } from './directivehidden.component';

describe('DirectivehiddenComponent', () => {
  let component: DirectivehiddenComponent;
  let fixture: ComponentFixture<DirectivehiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivehiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivehiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
