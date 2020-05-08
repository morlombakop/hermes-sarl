import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  hasScrolled = false;
  @Input() onMenuClick = () => {};

  handleMenuClick() {
    if (this.onMenuClick) {
      this.onMenuClick();
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
