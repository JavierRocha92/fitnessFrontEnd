import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatComponentComponent } from './float-component.component';

describe('FloatComponentComponent', () => {
  let component: FloatComponentComponent;
  let fixture: ComponentFixture<FloatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
