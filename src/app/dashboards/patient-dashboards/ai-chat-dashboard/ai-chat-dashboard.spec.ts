import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChatDashboard } from './ai-chat-dashboard';

describe('AiChatDashboard', () => {
  let component: AiChatDashboard;
  let fixture: ComponentFixture<AiChatDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiChatDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiChatDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
