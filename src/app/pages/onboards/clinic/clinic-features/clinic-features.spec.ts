import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicFeatures } from './clinic-features';

describe('ClinicFeatures', () => {
  let component: ClinicFeatures;
  let fixture: ComponentFixture<ClinicFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
