import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RoutepoductdetailsComponent } from './routepoductdetails/routepoductdetails.component';


const routes: Routes = [
  {path: 'home', component: ProductsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'productdetails/:id', component: RoutepoductdetailsComponent},
  {path: '**', component: PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
