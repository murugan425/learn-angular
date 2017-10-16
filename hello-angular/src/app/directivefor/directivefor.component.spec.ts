import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveforComponent } from './directivefor.component';

describe('DirectiveforComponent', () => {
  let component: DirectiveforComponent;
  let fixture: ComponentFixture<DirectiveforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
