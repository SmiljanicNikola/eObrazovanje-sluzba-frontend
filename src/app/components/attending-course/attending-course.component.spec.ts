import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingCourseComponent } from './attending-course.component';

describe('AttendingCourseComponent', () => {
  let component: AttendingCourseComponent;
  let fixture: ComponentFixture<AttendingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
