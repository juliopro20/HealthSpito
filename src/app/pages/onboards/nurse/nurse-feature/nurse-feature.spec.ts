import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseFeature } from './nurse-feature';

describe('NurseFeature', () => {
  let component: NurseFeature;
  let fixture: ComponentFixture<NurseFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
