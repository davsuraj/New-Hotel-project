import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/common-service/common.service';
// import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDrawer } from '@angular/material/sidenav';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('drawer') drawer!: MatDrawer;
  isSidebarShow: boolean = true;
  showFiller:boolean = true;
  events: string[] = [];
  opened: boolean= true;
  drawerMode: 'over' | 'side' = 'side';
  isSmallScreen = false;
  
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
;
  constructor(private observer: BreakpointObserver, private router: Router, private common: CommonService, private breakpointObserver: BreakpointObserver) {

  }

  toggleDrawer(): void {
    this.drawer.toggle();
    this.opened = true;
  }
  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 1000px)']).subscribe(result => {
      this.isSmallScreen = result.matches;
      if (this.isSmallScreen) {
        this.drawerMode = 'over';
        this.opened = false;  // Close the drawer when screen size is less than 1000px
      } else {
        this.drawerMode = 'side';
        this.opened = true;  // Open the drawer when screen size is greater than 1000px
      }
    });
  }

  sidebar() {
    this.isSidebarShow = !this.isSidebarShow;
  };
  onLinkClick(linkName: string) {
    this.common.changeLinkName(linkName);
  }

  // ngAfterViewInit() {
  //   this.observer
  //     .observe(['(max-width: 800px)'])
  //     .pipe(delay(1), untilDestroyed(this))
  //     .subscribe((res) => {
  //       if (res.matches) {
  //         this.sidenav.mode = 'over';
  //         this.sidenav.close();
  //       } else {
  //         this.sidenav.mode = 'side';
  //         this.sidenav.open();
  //       }
  //     });

  //   this.router.events
  //     .pipe(
  //       untilDestroyed(this),
  //       filter((e) => e instanceof NavigationEnd)
  //     )
  //     .subscribe(() => {
  //       if (this.sidenav.mode === 'over') {
  //         this.sidenav.close();
  //       }
  //     });
  // }

  // user profile toggle
  // openUserMenu() {
  //   this.trigger.openMenu();
  // }
  // closeUserMenu() {
  //   this.trigger.closeMenu();
  // }

}

// function untilDestroyed<MainComponent extends MainComponent>(arg0: this): any {
//   throw new Error('Function not implemented.');
// }
// function untilDestroyed<MainComponent extends MainComponent>(arg0: this): any {
//   throw new Error('Function not implemented.');
// }

