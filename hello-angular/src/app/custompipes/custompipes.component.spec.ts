import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompipesComponent } from './custompipes.component';

describe('CustompipesComponent', () => {
  let component: CustompipesComponent;
  let fixture: ComponentFixture<CustompipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustompipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustompipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
