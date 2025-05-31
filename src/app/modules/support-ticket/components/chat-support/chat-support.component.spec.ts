import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSupportComponent } from './chat-support.component';

describe('ChatSupportComponent', () => {
  let component: ChatSupportComponent;
  let fixture: ComponentFixture<ChatSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatSupportComponent]
    });
    fixture = TestBed.createComponent(ChatSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
