import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsOnboarding } from './hospitals-onboarding';

describe('HospitalsOnboarding', () => {
  let component: HospitalsOnboarding;
  let fixture: ComponentFixture<HospitalsOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalsOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalsOnboarding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
