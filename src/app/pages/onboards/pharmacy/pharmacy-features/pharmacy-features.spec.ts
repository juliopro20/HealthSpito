import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyFeatures } from './pharmacy-features';

describe('PharmacyFeatures', () => {
  let component: PharmacyFeatures;
  let fixture: ComponentFixture<PharmacyFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
