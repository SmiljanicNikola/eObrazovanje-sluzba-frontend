import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePreExamObligatinComponent } from './update-pre-exam-obligatin.component';

describe('UpdatePreExamObligatinComponent', () => {
  let component: UpdatePreExamObligatinComponent;
  let fixture: ComponentFixture<UpdatePreExamObligatinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePreExamObligatinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePreExamObligatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
