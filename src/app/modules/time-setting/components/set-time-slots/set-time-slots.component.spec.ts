import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTimeSlotsComponent } from './set-time-slots.component';

describe('SetTimeSlotsComponent', () => {
  let component: SetTimeSlotsComponent;
  let fixture: ComponentFixture<SetTimeSlotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetTimeSlotsComponent]
    });
    fixture = TestBed.createComponent(SetTimeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
