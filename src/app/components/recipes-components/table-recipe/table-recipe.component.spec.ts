import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRecipeComponent } from './table-recipe.component';

describe('TableRecipeComponent', () => {
  let component: TableRecipeComponent;
  let fixture: ComponentFixture<TableRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
