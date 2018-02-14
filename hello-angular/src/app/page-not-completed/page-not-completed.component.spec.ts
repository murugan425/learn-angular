import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotCompletedComponent } from './page-not-completed.component';

describe('PageNotCompletedComponent', () => {
  let component: PageNotCompletedComponent;
  let fixture: ComponentFixture<PageNotCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
