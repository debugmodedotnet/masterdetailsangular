import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  showDetails = false;
  selectedid: number;
  btnDisplay = 'Multiple Views';
  orientation = 0;

  displayModeForm: FormGroup;
  constructor(private appservice: AppService, private router: Router) {
  }
  ngOnInit() {
    this.displayModeForm = new FormGroup({
      mode: new FormControl('sp')
  });
    this.getProducts();
    this.formControlValueChanged();
  }

  getProducts() {
    this.appservice.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  productdetails(data) {

    if (this.orientation === 0) {
      this.showDetails = true;
      this.selectedid = data;
    } else if (this.orientation === 1) {
      this.router.navigate(['productdetails', data]);
    }
  }
  closedetails(data) {
    this.showDetails = false;
  }

  // pageorinetaion() {
  //   if (this.orientation === 0) {
  //     this.btnDisplay = 'Multiple Views';
  //     this.orientation = 1;

  //   } else if (this.orientation === 1) {
  //     this.btnDisplay = 'Same View';
  //     this.orientation = 0;
  //   }
  // }

  formControlValueChanged() {
    this.displayModeForm.get('mode').valueChanges.subscribe(
        (mode: string) => {
            console.log(mode);
            if (mode === 'sp') {
              this.orientation = 0;
            } else if (mode === 'mp') {
               this.orientation = 1;
            }
        });
}


}
