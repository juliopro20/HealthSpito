import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsFeatures } from './hospitals-features';

describe('HospitalsFeatures', () => {
  let component: HospitalsFeatures;
  let fixture: ComponentFixture<HospitalsFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalsFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalsFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
