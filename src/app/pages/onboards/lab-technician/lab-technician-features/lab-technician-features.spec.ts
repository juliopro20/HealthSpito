import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTechnicianFeatures } from './lab-technician-features';

describe('LabTechnicianFeatures', () => {
  let component: LabTechnicianFeatures;
  let fixture: ComponentFixture<LabTechnicianFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabTechnicianFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabTechnicianFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
