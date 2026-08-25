import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHelp } from './doctor-help';

describe('DoctorHelp', () => {
  let component: DoctorHelp;
  let fixture: ComponentFixture<DoctorHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorHelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
