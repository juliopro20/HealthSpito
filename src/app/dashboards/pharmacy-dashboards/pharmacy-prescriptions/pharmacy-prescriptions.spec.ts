import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyPrescriptions } from './pharmacy-prescriptions';

describe('PharmacyPrescriptions', () => {
  let component: PharmacyPrescriptions;
  let fixture: ComponentFixture<PharmacyPrescriptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyPrescriptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyPrescriptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
