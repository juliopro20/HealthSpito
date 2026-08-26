import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOrders } from './pharmacy-orders';

describe('PharmacyOrders', () => {
  let component: PharmacyOrders;
  let fixture: ComponentFixture<PharmacyOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyOrders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyOrders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
