import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryOnboarding } from './laboratory-onboarding';

describe('LaboratoryOnboarding', () => {
  let component: LaboratoryOnboarding;
  let fixture: ComponentFixture<LaboratoryOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryOnboarding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
