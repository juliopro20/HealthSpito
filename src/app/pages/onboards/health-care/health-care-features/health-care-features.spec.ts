import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareFeatures } from './health-care-features';

describe('HealthCareFeatures', () => {
  let component: HealthCareFeatures;
  let fixture: ComponentFixture<HealthCareFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthCareFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCareFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
