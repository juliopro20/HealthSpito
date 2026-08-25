import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderDashboard } from './calender-dashboard';

describe('CalenderDashboard', () => {
  let component: CalenderDashboard;
  let fixture: ComponentFixture<CalenderDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
