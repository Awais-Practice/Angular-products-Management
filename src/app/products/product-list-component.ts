import {Component, OnInit} from '@angular/core';
import {IProduct} from './product'
import { from } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector:"pm-product",
  templateUrl:"./product-list-component.html",
  styleUrls:['./product-list-component.css']
})
export class ProductListComponent implements OnInit{
  title:string=" Products List"
  pageTitle:string ="Product List:";
  imageWidthHeight:number=50;
  imageMargin:number=2;
  showImage:boolean=false;
  // listFilter:string='';
test="Hello world";



  filtredProducts:IProduct[];
  _listFilter:string;
  get listFilter():string{
    return this._listFilter;
  }
set listFilter(value:string){
  this._listFilter = value;
  this.filtredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
}


onRatingClicked(meassge:string) : void {
  this.pageTitle ='Product List:'+ meassge;
}

constructor(private productService: ProductService){
  //this.listFilter ="";

}



  products:IProduct[]=[];




performFilter(filterBy:string):IProduct[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product:IProduct)=> product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
  )
}






  toggleImage(){
    this.showImage = !this.showImage;
  }
  ngOnInit(){

  this.productService.getProducts().subscribe({
    next:products=>{
      this.products =products;
      this.filtredProducts = this.products;

    }

  });

  }
}

