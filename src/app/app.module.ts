import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductInMemDataService } from './productinmemorydata.service';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RoutepoductdetailsComponent } from './routepoductdetails/routepoductdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductdetailsComponent,
    PagenotfoundComponent,
    RoutepoductdetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductInMemDataService)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
