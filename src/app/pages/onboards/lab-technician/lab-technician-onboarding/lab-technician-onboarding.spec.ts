import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTechnicianOnboarding } from './lab-technician-onboarding';

describe('LabTechnicianOnboarding', () => {
  let component: LabTechnicianOnboarding;
  let fixture: ComponentFixture<LabTechnicianOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabTechnicianOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabTechnicianOnboarding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
