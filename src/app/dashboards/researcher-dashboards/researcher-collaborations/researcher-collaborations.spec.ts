import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherCollaborations } from './researcher-collaborations';

describe('ResearcherCollaborations', () => {
  let component: ResearcherCollaborations;
  let fixture: ComponentFixture<ResearcherCollaborations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherCollaborations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherCollaborations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
