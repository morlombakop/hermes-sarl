import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private document: Document;
  title = 'hermes-sarl';
  // isSmallScreen = false;
  isXSmall = false;
  isSmallAndBelow = false;
  isSmall = false;

  constructor(@Inject(DOCUMENT) document: Document, breakpointObserver: BreakpointObserver) {
    this.document = document;
    this.isSmallAndBelow = breakpointObserver.isMatched([Breakpoints.XSmall, Breakpoints.Small]);
    this.isXSmall = breakpointObserver.isMatched(Breakpoints.XSmall);
    this.isSmall = breakpointObserver.isMatched(Breakpoints.Small);
 }

  onMenuClick = (sectionId: string) => {
    const element =  this.document.getElementById(sectionId);
    const wind = this.document.defaultView;
    const position = element.getBoundingClientRect().top + wind.pageYOffset - 50;
    wind.scrollTo({ top: position, behavior: 'smooth' });
  }
}
