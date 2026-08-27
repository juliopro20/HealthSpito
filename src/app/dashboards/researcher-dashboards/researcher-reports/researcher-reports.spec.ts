import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherReports } from './researcher-reports';

describe('ResearcherReports', () => {
  let component: ResearcherReports;
  let fixture: ComponentFixture<ResearcherReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
