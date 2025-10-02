import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidWifeFeature } from './mid-wife-feature';

describe('MidWifeFeature', () => {
  let component: MidWifeFeature;
  let fixture: ComponentFixture<MidWifeFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidWifeFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidWifeFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
