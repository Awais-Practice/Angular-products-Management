import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces-pipe';
import { ProductListComponent } from './product-list-component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { WelcomeComponent } from '../home/welcome.component';
import { SharedModule } from '../shared/shared.module';


const appTest =
[
  {path:'products', component: ProductListComponent},
  {path:'products/:id',
  canActivate:[ProductDetailGuard], component: ProductDetailComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'', component: WelcomeComponent},
  {path:'product', component: ProductDetailComponent}
]
@NgModule({
  declarations: [

    ConvertToSpacesPipe,
    ProductListComponent,
    ProductDetailComponent


  ],
  imports: [

    RouterModule.forChild(appTest),
    SharedModule,
  ]
})
export class ProductModule { }
