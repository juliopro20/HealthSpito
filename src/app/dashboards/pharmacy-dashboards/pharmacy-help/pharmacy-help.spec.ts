import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyHelp } from './pharmacy-help';

describe('PharmacyHelp', () => {
  let component: PharmacyHelp;
  let fixture: ComponentFixture<PharmacyHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyHelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
