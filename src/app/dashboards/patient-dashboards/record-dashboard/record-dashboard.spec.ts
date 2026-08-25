import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDashboard } from './record-dashboard';

describe('RecordDashboard', () => {
  let component: RecordDashboard;
  let fixture: ComponentFixture<RecordDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
