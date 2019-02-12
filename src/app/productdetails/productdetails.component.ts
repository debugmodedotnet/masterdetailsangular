import { Component, OnInit, Input, OnChanges, Output , EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { ProductDetails } from '../productdetails';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, OnChanges {

  @Input() id: number;
  product: ProductDetails;
  @Output() closeit = new EventEmitter();
  constructor(private appservice: AppService) {
  }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.id);
    this.getproductDetails();
  }

  getproductDetails() {
    this.appservice.getProductDetails(this.id).subscribe(data => {
      this.product = data;
    });
  }
  close() {
    this.closeit.emit();
  }
}
