import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list-component';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces-pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule


  ],
  providers:[ProductService],

  bootstrap: [AppComponent]
})
export class AppModule { }
