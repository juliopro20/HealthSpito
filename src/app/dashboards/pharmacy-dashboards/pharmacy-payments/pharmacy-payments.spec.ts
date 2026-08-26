import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyPayments } from './pharmacy-payments';

describe('PharmacyPayments', () => {
  let component: PharmacyPayments;
  let fixture: ComponentFixture<PharmacyPayments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyPayments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyPayments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
