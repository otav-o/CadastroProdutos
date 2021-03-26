import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component'; //.ts
import {ProductCrudComponent} from './views/product-crud/product-crud.component'; //.ts
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, 
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  },
  {
    path: 'products/update/:id', // dois pontos indicam que é um parâmetro, e não id literal
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
