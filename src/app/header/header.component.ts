import { Component, Input, HostListener, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hasScrolled = false;
  isSmallScreen: boolean;
  @Input() onMenuClick = (sectionId: string) => {};

  constructor(breakpointObserver: BreakpointObserver){
    // console.log(Breakpoints.Small);
    this.isSmallScreen = breakpointObserver.isMatched(Breakpoints.XSmall);
    console.log(this.isSmallScreen);
  }

  ngOnInit(){
    // const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  handleMenuClick(sectionId: string) {
    if (this.onMenuClick) {
      this.onMenuClick(sectionId);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onVerticalScroll(event: WindowEventHandlers) {
    if (window.pageYOffset > 100 && this.hasScrolled === false) {
      this.hasScrolled = true;
    } else if (window.pageYOffset < 100 && this.hasScrolled === true) {
      this.hasScrolled = false;
    }
  }
}
