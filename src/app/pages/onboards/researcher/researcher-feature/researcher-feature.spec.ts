import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherFeature } from './researcher-feature';

describe('ResearcherFeature', () => {
  let component: ResearcherFeature;
  let fixture: ComponentFixture<ResearcherFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
