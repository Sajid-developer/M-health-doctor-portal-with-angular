import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedHeaderComponent } from './authenticated-header.component';

describe('AuthenticatedHeaderComponent', () => {
  let component: AuthenticatedHeaderComponent;
  let fixture: ComponentFixture<AuthenticatedHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticatedHeaderComponent]
    });
    fixture = TestBed.createComponent(AuthenticatedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
