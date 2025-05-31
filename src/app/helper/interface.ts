export interface sidebarMenusType {
    title: string;
    route?: string;
    icon: any;
    isSubMenu: boolean;
    showSubMenu: boolean;
    subMenu?: sidebarMenusType[];
  }

export interface dashboardCardDetailsType {
  title: string;
  icon: any;
  route: string;
}