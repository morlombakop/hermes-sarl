import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() onMenuClick = () => {};

  constructor(
    // private jwtService: JwtService,
    // private identityService: IdentityService,
    // private router: Router,
  ) {}

  handleMenuClick() {
    if (this.onMenuClick) {
      this.onMenuClick();
    }
  }
}
