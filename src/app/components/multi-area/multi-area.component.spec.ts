import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAreaComponent } from './multi-area.component';

describe('MultiAreaComponent', () => {
  let component: MultiAreaComponent;
  let fixture: ComponentFixture<MultiAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
