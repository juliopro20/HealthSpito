import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherProfile } from './researcher-profile';

describe('ResearcherProfile', () => {
  let component: ResearcherProfile;
  let fixture: ComponentFixture<ResearcherProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
