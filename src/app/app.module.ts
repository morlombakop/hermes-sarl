import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ProductsModule } from './products/products.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HeaderModule,
    HomeModule,
    AboutModule,
    ProductsModule,
    TestimonialsModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
