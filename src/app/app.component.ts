import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`<div class="container"><h1 class="text-center mt-5 mb-5">Product Manegment</h1><div><pm-product></pm-product></div></div>`



})
export class AppComponent {
  pageTitle = 'Angular: Getting Started';
}



