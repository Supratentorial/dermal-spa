import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailShellComponent } from './patient-detail-shell.component';

describe('PatientDetailShellComponent', () => {
  let component: PatientDetailShellComponent;
  let fixture: ComponentFixture<PatientDetailShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetailShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
