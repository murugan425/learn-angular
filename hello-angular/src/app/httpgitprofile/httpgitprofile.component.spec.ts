import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpgitprofileComponent } from './httpgitprofile.component';

describe('HttpgitprofileComponent', () => {
  let component: HttpgitprofileComponent;
  let fixture: ComponentFixture<HttpgitprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpgitprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpgitprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
