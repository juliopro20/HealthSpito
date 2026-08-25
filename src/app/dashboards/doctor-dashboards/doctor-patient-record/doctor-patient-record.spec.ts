import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatientRecord } from './doctor-patient-record';

describe('DoctorPatientRecord', () => {
  let component: DoctorPatientRecord;
  let fixture: ComponentFixture<DoctorPatientRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorPatientRecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPatientRecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
