import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyProfile } from './pharmacy-profile';

describe('PharmacyProfile', () => {
  let component: PharmacyProfile;
  let fixture: ComponentFixture<PharmacyProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
