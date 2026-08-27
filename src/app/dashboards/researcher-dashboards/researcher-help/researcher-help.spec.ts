import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherHelp } from './researcher-help';

describe('ResearcherHelp', () => {
  let component: ResearcherHelp;
  let fixture: ComponentFixture<ResearcherHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherHelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
