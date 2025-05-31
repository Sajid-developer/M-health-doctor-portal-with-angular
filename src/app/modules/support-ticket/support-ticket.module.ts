import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowTicketsComponent } from './components/show-tickets/show-tickets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CreateSupportTicketComponent } from './components/create-support-ticket/create-support-ticket.component';
import { ChatSupportComponent } from './components/chat-support/chat-support.component';



const routes: Routes = [
  {
    path: 'support-ticket',
    
    children: [
      {
        path: '',
        component: ShowTicketsComponent,
      },
      {
        path: 'create-support-ticket',
        component: CreateSupportTicketComponent,
      },
      {
        path: 'chat-support/:id',
        component: ChatSupportComponent,
      },
    ]
  },
];


@NgModule({
  declarations: [ShowTicketsComponent, CreateSupportTicketComponent, ChatSupportComponent],
  imports: [
   CommonModule,
   RouterModule.forChild(routes),
   FontAwesomeModule,
   NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise-fade' }),
  ]
})
export class SupportTicketModule { }
