import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherDataAccess } from './researcher-data-access';

describe('ResearcherDataAccess', () => {
  let component: ResearcherDataAccess;
  let fixture: ComponentFixture<ResearcherDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherDataAccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherDataAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
