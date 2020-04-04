import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotaccessibleComponent } from './pagenotaccessible.component';

describe('PagenotaccessibleComponent', () => {
  let component: PagenotaccessibleComponent;
  let fixture: ComponentFixture<PagenotaccessibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotaccessibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotaccessibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
