import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyPatientProfiles } from './pharmacy-patient-profiles';

describe('PharmacyPatientProfiles', () => {
  let component: PharmacyPatientProfiles;
  let fixture: ComponentFixture<PharmacyPatientProfiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyPatientProfiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyPatientProfiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
