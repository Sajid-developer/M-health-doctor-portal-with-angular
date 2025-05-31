import { Component } from '@angular/core';
import { dashboardCardDetailsType } from 'src/app/helper/interface';
import { fontAwesomeSolidIcons } from 'src/assets/font-awsome-icons/icons.font-awesome-solid';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  arrowRightIcon = fontAwesomeSolidIcons.faArrowRight;
  heartIcon = fontAwesomeSolidIcons.faHeart;

  dashboardCardDetails: dashboardCardDetailsType[] = [
    {
      icon: '../../../../../assets/images/card-images/time_availability.png',
      title: 'Time Availability',
      route: '',
    },
    {
      icon: '../../../../../assets/images/card-images/consultation_history.png',
      title: 'Consultation History',
      route: '',
    },
    {
      icon: '../../../../../assets/images/card-images/patient_history.png',
      title: 'Patient History',
      route: '',
    },
  ];

  roTableHeadData: string[] = [
    'Case ID',
    'Doctor Name',
    'Date',
    'Time',
    'Charges',
    'Status',
    'Action',
  ];

  roTableBodyData: any[] = [];
}
