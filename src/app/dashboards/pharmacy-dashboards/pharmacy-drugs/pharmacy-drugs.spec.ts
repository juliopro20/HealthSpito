import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDrugs } from './pharmacy-drugs';

describe('PharmacyDrugs', () => {
  let component: PharmacyDrugs;
  let fixture: ComponentFixture<PharmacyDrugs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyDrugs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyDrugs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
