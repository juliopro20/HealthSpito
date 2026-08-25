import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMessages } from './doctor-messages';

describe('DoctorMessages', () => {
  let component: DoctorMessages;
  let fixture: ComponentFixture<DoctorMessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorMessages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorMessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
