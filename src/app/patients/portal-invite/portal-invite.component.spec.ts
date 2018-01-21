import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalInviteComponent } from './portal-invite.component';

describe('PortalInviteComponent', () => {
  let component: PortalInviteComponent;
  let fixture: ComponentFixture<PortalInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
