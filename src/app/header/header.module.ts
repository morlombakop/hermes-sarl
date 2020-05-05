import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
