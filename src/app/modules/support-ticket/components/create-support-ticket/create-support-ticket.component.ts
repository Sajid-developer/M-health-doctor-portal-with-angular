import { Component } from '@angular/core';
import { fontAwesomeSolidIcons } from '../../../../../assets/font-awsome-icons/icons.font-awesome-solid';

@Component({
  selector: 'app-create-support-ticket',
  templateUrl: './create-support-ticket.component.html',
  styleUrls: ['./create-support-ticket.component.scss']
})
export class CreateSupportTicketComponent {
  backIcon = fontAwesomeSolidIcons.faReply
}
