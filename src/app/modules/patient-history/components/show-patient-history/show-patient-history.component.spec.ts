import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPatientHistoryComponent } from './show-patient-history.component';

describe('ShowPatientHistoryComponent', () => {
  let component: ShowPatientHistoryComponent;
  let fixture: ComponentFixture<ShowPatientHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPatientHistoryComponent]
    });
    fixture = TestBed.createComponent(ShowPatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
