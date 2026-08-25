import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFeature } from './patient-feature';

describe('PatientFeature', () => {
  let component: PatientFeature;
  let fixture: ComponentFixture<PatientFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
