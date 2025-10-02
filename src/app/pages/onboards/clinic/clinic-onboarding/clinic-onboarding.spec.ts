import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicOnboarding } from './clinic-onboarding';

describe('ClinicOnboarding', () => {
  let component: ClinicOnboarding;
  let fixture: ComponentFixture<ClinicOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicOnboarding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
