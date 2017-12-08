import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientIdentityComponent } from './patient-identity.component';

describe('PatientIdentityComponent', () => {
  let component: PatientIdentityComponent;
  let fixture: ComponentFixture<PatientIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
