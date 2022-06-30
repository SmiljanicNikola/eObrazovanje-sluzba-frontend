import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenExamComponentComponent } from './taken-exams.component';

describe('TakenExamComponentComponent', () => {
  let component: TakenExamComponentComponent;
  let fixture: ComponentFixture<TakenExamComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakenExamComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenExamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
