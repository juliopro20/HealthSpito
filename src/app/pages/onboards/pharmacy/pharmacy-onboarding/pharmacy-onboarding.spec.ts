import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOnboarding } from './pharmacy-onboarding';

describe('PharmacyOnboarding', () => {
  let component: PharmacyOnboarding;
  let fixture: ComponentFixture<PharmacyOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyOnboarding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
