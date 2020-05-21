import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TestimonialsComponent } from './testimonials.component';

@NgModule({
  imports: [FontAwesomeModule],
  declarations: [TestimonialsComponent],
  exports: [TestimonialsComponent],
})
export class TestimonialsModule {}
