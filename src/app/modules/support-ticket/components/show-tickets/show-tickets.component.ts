import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fontAwesomeSolidIcons } from '../../../../../assets/font-awsome-icons/icons.font-awesome-solid'

@Component({
  selector: 'app-show-tickets',
  templateUrl: './show-tickets.component.html',
  styleUrls: ['./show-tickets.component.scss']
})
export class ShowTicketsComponent {
  commentDotIcon = fontAwesomeSolidIcons.faCommentDots;
  constructor(private router: Router) {}

  handleCreateTicket() {
    this.router.navigateByUrl('/support-ticket/create-support-ticket');
  }

}

