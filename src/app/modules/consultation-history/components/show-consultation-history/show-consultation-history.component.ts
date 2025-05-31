import { Component } from '@angular/core';
import { fontAwesomeSolidIcons } from 'src/assets/font-awsome-icons/icons.font-awesome-solid';

@Component({
  selector: 'app-show-consultation-history',
  templateUrl: './show-consultation-history.component.html',
  styleUrls: ['./show-consultation-history.component.scss']
})
export class ShowConsultationHistoryComponent {
  backIcon = fontAwesomeSolidIcons.faReply
}
