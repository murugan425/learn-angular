import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbindComponent } from './classbind.component';

describe('ClassbindComponent', () => {
  let component: ClassbindComponent;
  let fixture: ComponentFixture<ClassbindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassbindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
