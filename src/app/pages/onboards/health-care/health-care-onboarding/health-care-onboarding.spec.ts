import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareOnboarding } from './health-care-onboarding';

describe('HealthCareOnboarding', () => {
  let component: HealthCareOnboarding;
  let fixture: ComponentFixture<HealthCareOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthCareOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCareOnboarding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
