import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenConsultationComponent } from './open-consultation.component';

describe('OpenConsultationComponent', () => {
  let component: OpenConsultationComponent;
  let fixture: ComponentFixture<OpenConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenConsultationComponent]
    });
    fixture = TestBed.createComponent(OpenConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
