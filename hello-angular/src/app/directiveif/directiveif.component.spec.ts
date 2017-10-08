import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveifComponent } from './directiveif.component';

describe('DirectiveifComponent', () => {
  let component: DirectiveifComponent;
  let fixture: ComponentFixture<DirectiveifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
