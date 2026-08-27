import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherPublications } from './researcher-publications';

describe('ResearcherPublications', () => {
  let component: ResearcherPublications;
  let fixture: ComponentFixture<ResearcherPublications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherPublications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherPublications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
