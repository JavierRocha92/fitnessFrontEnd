import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiralChartComponent } from './spiral-chart.component';

describe('SpiralChartComponent', () => {
  let component: SpiralChartComponent;
  let fixture: ComponentFixture<SpiralChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpiralChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpiralChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
