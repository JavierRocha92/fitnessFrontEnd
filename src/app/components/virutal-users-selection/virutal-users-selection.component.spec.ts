import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirutalUsersSelectionComponent } from './virutal-users-selection.component';

describe('VirutalUsersSelectionComponent', () => {
  let component: VirutalUsersSelectionComponent;
  let fixture: ComponentFixture<VirutalUsersSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirutalUsersSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirutalUsersSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
