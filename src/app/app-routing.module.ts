import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ProductListComponent } from './ProductList/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const appRoutes: Routes=[

  {path:"home", component: HomeComponent},
  // {path:"books", component: BookListComponent},
  {path:"products", component: ProductListComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"},
   {path:"**",component :PageNotFoundComponent},

]

  





@NgModule({
  imports: [
    
    RouterModule.forRoot(appRoutes)
  ]

})
export class AppRoutingModule { }
