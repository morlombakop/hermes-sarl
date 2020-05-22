import { Component, Input, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  hasScrolled = false;
  @Input() isSmallAndBelow = false;
  @Input() onMenuClick = (sectionId: string) => {};


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
