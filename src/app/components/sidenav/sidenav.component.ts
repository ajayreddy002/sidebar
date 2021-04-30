import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MenuServiceService, MenuItem, Menu } from '../../_services/menu.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  menuList: MenuItem[];
  menuGroupSelected: string;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private menuService: MenuServiceService
  ) { }

  ngOnInit(): void {
    this.menuList = this.menuService.getMenuList();
  }
  selectMenu(menuGroup: Menu) {
    if (this.menuGroupSelected === menuGroup.code) {
      this.menuGroupSelected = null;
      return;
    }
    this.menuGroupSelected = menuGroup.code;
  }

}
