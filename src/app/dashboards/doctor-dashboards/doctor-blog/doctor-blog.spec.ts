import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBlog } from './doctor-blog';

describe('DoctorBlog', () => {
  let component: DoctorBlog;
  let fixture: ComponentFixture<DoctorBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
