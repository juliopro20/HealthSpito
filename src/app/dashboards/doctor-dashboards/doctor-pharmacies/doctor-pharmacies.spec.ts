import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPharmacies } from './doctor-pharmacies';

describe('DoctorPharmacies', () => {
  let component: DoctorPharmacies;
  let fixture: ComponentFixture<DoctorPharmacies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorPharmacies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPharmacies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
