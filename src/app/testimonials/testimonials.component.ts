import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { testimonials } from './testimonials';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {
  faQuoteRight = faQuoteRight; faQuoteLeft = faQuoteLeft;
  testimonial = testimonials[0];
  index = 0;

  ngAfterViewInit(): void {
    setInterval(function(){
      this.index = this.index === testimonials.length - 1 ? 0 : this.index + 1;
      this.testimonial = testimonials[this.index];
    }.bind(this), 10000);
  }
}
