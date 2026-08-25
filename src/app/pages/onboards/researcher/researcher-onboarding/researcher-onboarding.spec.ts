import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherOnboarding } from './researcher-onboarding';

describe('ResearcherOnboarding', () => {
  let component: ResearcherOnboarding;
  let fixture: ComponentFixture<ResearcherOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherOnboarding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
