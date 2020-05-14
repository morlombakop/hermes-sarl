import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [MatGridListModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule],
  declarations: [ContactComponent],
  exports: [ContactComponent],
})
export class ContactModule {}
