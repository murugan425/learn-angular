import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpgitpostsComponent } from './httpgitposts.component';

describe('HttpgitpostsComponent', () => {
  let component: HttpgitpostsComponent;
  let fixture: ComponentFixture<HttpgitpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpgitpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpgitpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
