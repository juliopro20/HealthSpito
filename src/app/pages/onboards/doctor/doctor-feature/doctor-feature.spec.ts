import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFeature } from './doctor-feature';

describe('DoctorFeature', () => {
  let component: DoctorFeature;
  let fixture: ComponentFixture<DoctorFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
