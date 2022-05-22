import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersExamsComponent } from './lecturers-exams.component';

describe('LecturersExamsComponent', () => {
  let component: LecturersExamsComponent;
  let fixture: ComponentFixture<LecturersExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturersExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
