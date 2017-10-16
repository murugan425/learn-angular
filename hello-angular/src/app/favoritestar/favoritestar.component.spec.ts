import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritestarComponent } from './favoritestar.component';

describe('FavoritestarComponent', () => {
  let component: FavoritestarComponent;
  let fixture: ComponentFixture<FavoritestarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritestarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
