import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributebindComponent } from './attributebind.component';

describe('AttributebindComponent', () => {
  let component: AttributebindComponent;
  let fixture: ComponentFixture<AttributebindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributebindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributebindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
