import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CURRENT_PAGE } from '../../helper/constants';
import { sidebarMenusType } from 'src/app/helper/interface';
import { sidebarMenus } from 'src/app/helper/sidebar';
import { fontAwesomeSolidIcons } from 'src/assets/font-awsome-icons/icons.font-awesome-solid';

@Component({
  selector: 'app-authenticated-header',
  templateUrl: './authenticated-header.component.html',
  styleUrls: [
    './authenticated-header.component.scss',
  ],
})
export class AuthenticatedHeaderComponent {
  bellIcon = fontAwesomeSolidIcons.faBell;
  houseIcon = fontAwesomeSolidIcons.faHouse;
  arrowIcon = fontAwesomeSolidIcons.faChevronRight;
  arrowDownIcon = fontAwesomeSolidIcons.faChevronDown;

  isUserModalOpen: boolean = false;

  pageName: string = 'Dashboard';

  currentPage!: string;

  language: string = sessionStorage.getItem('appLanguageCode') || 'en';

  constructor(private router: Router) {
    // set language code if not available in session storage
    this.constructorFunction.setDefaultLanguageCode();
    // set current page name on header
    this.constructorFunction.setCurrentPageName(router);
  }

  constructorFunction = {
    setDefaultLanguageCode: () => {
      const languageCode = sessionStorage.getItem('appLanguageCode');
      if (!languageCode) {
        sessionStorage.setItem('appLanguageCode', 'en');
      }
    },
    setCurrentPageName: (router: Router) => {
      const currentPath: string = router.url;
      let routePath = ''
      const currentPageDetails: sidebarMenusType[] = sidebarMenus.filter(
        (item: sidebarMenusType) => {
          if (item?.route && item?.route === currentPath) {
            routePath= item?.route || '';
            return item;
          }
          if (item.isSubMenu) {
            return item.subMenu?.filter((item: sidebarMenusType) => {
              if (item?.route && item?.route === currentPath) {
                routePath= item?.route || '';
                return item;
              }
              return null;
            });
          }
          return null;
        }
      );
      console.log(CURRENT_PAGE[routePath])
      this.currentPage = CURRENT_PAGE[routePath];
    },
  };

  showModal() {
    this.isUserModalOpen = !this.isUserModalOpen;
  }
  handleProfileClick() {
    this.router.navigateByUrl('profile');
  }

  handleLogout() {
    this.router.navigateByUrl('login');
  }
  changeLanguage(event: any) {
    this.language = event.target.value;
    sessionStorage.setItem('appLanguageCode', this.language);
  }
}
