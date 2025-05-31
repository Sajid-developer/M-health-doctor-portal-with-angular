import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedSidebarComponent } from './authenticated-sidebar.component';

describe('AuthenticatedSidebarComponent', () => {
  let component: AuthenticatedSidebarComponent;
  let fixture: ComponentFixture<AuthenticatedSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticatedSidebarComponent]
    });
    fixture = TestBed.createComponent(AuthenticatedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
