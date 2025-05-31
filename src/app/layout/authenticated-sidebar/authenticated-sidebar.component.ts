// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-authenticated-sidebar',
//   templateUrl: './authenticated-sidebar.component.html',
//   styleUrls: ['./authenticated-sidebar.component.scss']
// })
// export class AuthenticatedSidebarComponent {

// }


import { Component } from '@angular/core';
import { sidebarMenus } from 'src/app/helper/sidebar';
import { fontAwesomeSolidIcons } from '../../../assets/font-awsome-icons/icons.font-awesome-solid';
import { sidebarMenusType } from 'src/app/helper/interface';

@Component({
  selector: 'app-authenticated-sidebar',
  templateUrl: './authenticated-sidebar.component.html',
  styleUrls: ['./authenticated-sidebar.component.scss'],
})

export class AuthenticatedSidebarComponent {
  sidebarMenus: sidebarMenusType [] = sidebarMenus;

  chevronRight = fontAwesomeSolidIcons.faChevronRight;

  constructor() {

  }

  showSubMenu(menu: sidebarMenusType) {
    if(menu.isSubMenu) {
      menu.showSubMenu = !menu.showSubMenu;
    }
  }

}
