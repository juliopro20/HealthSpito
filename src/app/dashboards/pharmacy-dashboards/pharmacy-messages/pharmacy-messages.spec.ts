import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyMessages } from './pharmacy-messages';

describe('PharmacyMessages', () => {
  let component: PharmacyMessages;
  let fixture: ComponentFixture<PharmacyMessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyMessages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyMessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
