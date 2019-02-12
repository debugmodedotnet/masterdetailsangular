import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../productdetails';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routepoductdetails',
  templateUrl: './routepoductdetails.component.html',
  styleUrls: ['./routepoductdetails.component.css']
})
export class RoutepoductdetailsComponent implements OnInit {

  product: ProductDetails;
  productid: any;
  constructor(private appservice: AppService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (p) => {
        this.productid = p.id;
      });

    this.getproductDetails();
  }


  getproductDetails() {
    this.appservice.getProductDetails(this.productid).subscribe(data => {
      this.product = data;
    });
  }

  back() {
    this.router.navigate(['home']);
  }
}
