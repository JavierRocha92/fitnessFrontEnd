import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlannerTableComponent } from './meal-planner-table.component';

describe('MealPlannerTableComponent', () => {
  let component: MealPlannerTableComponent;
  let fixture: ComponentFixture<MealPlannerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealPlannerTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealPlannerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
