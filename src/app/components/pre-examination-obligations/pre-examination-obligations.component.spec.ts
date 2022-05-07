import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreExaminationObligationsComponent } from './pre-examination-obligations.component';

describe('PreExaminationObligationsComponent', () => {
  let component: PreExaminationObligationsComponent;
  let fixture: ComponentFixture<PreExaminationObligationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreExaminationObligationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreExaminationObligationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
