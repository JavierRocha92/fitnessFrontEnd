import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInsertFormComponent } from './data-insert-form.component';

describe('DataInsertFormComponent', () => {
  let component: DataInsertFormComponent;
  let fixture: ComponentFixture<DataInsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataInsertFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
