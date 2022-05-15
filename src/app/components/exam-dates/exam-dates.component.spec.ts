import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDatesComponent } from './exam-dates.component';

describe('ExamDatesComponent', () => {
  let component: ExamDatesComponent;
  let fixture: ComponentFixture<ExamDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
