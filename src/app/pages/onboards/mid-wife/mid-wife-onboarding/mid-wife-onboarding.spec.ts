import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidWifeOnboarding } from './mid-wife-onboarding';

describe('MidWifeOnboarding', () => {
  let component: MidWifeOnboarding;
  let fixture: ComponentFixture<MidWifeOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidWifeOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidWifeOnboarding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
