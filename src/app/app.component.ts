import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'hermes-sarl';
  private document: Document;

  constructor(@Inject(DOCUMENT) document: Document) {
    this.document = document;
 }

  onMenuClick = (sectionId: string) => {
    const element =  this.document.getElementById(sectionId);
    const wind = this.document.defaultView;
    const position = element.getBoundingClientRect().top + wind.pageYOffset - 50;
    wind.scrollTo({ top: position, behavior: 'smooth' });
  }
}
