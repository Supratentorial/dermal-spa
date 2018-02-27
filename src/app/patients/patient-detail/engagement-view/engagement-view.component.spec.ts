import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementViewComponent } from './engagement-view.component';

describe('EngagementViewComponent', () => {
  let component: EngagementViewComponent;
  let fixture: ComponentFixture<EngagementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
