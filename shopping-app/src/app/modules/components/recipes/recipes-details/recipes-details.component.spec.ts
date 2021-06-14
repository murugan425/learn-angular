import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecipesDetailsComponent } from './recipes-details.component';

describe('RecipesDetailsComponent', () => {
  let component: RecipesDetailsComponent;
  let fixture: ComponentFixture<RecipesDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
