import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherProject } from './researcher-project';

describe('ResearcherProject', () => {
  let component: ResearcherProject;
  let fixture: ComponentFixture<ResearcherProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
