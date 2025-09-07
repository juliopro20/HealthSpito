import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteLogin } from './institute-login';

describe('InstituteLogin', () => {
  let component: InstituteLogin;
  let fixture: ComponentFixture<InstituteLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstituteLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
