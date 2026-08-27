import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherDashboard } from './researcher-dashboard';

describe('ResearcherDashboard', () => {
  let component: ResearcherDashboard;
  let fixture: ComponentFixture<ResearcherDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
