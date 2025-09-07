import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelLogin } from './personel-login';

describe('PersonelLogin', () => {
  let component: PersonelLogin;
  let fixture: ComponentFixture<PersonelLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonelLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
