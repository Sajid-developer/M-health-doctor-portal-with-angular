import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConsultationHistoryComponent } from './show-consultation-history.component';

describe('ShowConsultationHistoryComponent', () => {
  let component: ShowConsultationHistoryComponent;
  let fixture: ComponentFixture<ShowConsultationHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowConsultationHistoryComponent]
    });
    fixture = TestBed.createComponent(ShowConsultationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
