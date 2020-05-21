import { Component, AfterViewInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  title = 'hermes-sarl';
  private document: Document;

  constructor(@Inject(DOCUMENT) document: Document) {
    this.document = document;
 }

  ngAfterViewInit() {
    setTimeout(function(){
      const element =  this.document.getElementById('contact');
      const wind = this.document.defaultView;
      const y = element.getBoundingClientRect().top + wind.pageYOffset - 40;
      wind.scrollTo({ top: y, behavior: 'smooth' });
     }.bind(this), 2000);
  }
}
