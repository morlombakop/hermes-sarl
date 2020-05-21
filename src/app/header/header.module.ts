import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, LayoutModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
