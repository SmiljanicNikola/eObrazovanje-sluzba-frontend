import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSemestersComponent } from './create-semester.component';

describe('CreateSemesterComponent', () => {
  let component: CreateSemestersComponent;
  let fixture: ComponentFixture<CreateSemestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSemestersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSemestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
