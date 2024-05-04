import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgAreaComponent } from './avg-area.component';

describe('AvgAreaComponent', () => {
  let component: AvgAreaComponent;
  let fixture: ComponentFixture<AvgAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvgAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvgAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
