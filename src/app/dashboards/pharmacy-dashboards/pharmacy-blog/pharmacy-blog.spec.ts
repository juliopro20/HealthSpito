import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyBlog } from './pharmacy-blog';

describe('PharmacyBlog', () => {
  let component: PharmacyBlog;
  let fixture: ComponentFixture<PharmacyBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
