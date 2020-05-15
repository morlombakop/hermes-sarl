import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [CommonModule, MatGridListModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule],
  declarations: [ContactComponent],
  exports: [ContactComponent],
})
export class ContactModule {}
