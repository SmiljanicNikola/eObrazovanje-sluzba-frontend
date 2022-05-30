import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamDateComponent } from './create-exam-date.component';

describe('CreateExamDateComponent', () => {
  let component: CreateExamDateComponent;
  let fixture: ComponentFixture<CreateExamDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
