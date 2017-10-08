import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeheartComponent } from './likeheart.component';

describe('LikeheartComponent', () => {
  let component: LikeheartComponent;
  let fixture: ComponentFixture<LikeheartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeheartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeheartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
