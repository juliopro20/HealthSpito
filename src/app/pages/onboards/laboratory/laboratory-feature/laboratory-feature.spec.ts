import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryFeature } from './laboratory-feature';

describe('LaboratoryFeature', () => {
  let component: LaboratoryFeature;
  let fixture: ComponentFixture<LaboratoryFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
