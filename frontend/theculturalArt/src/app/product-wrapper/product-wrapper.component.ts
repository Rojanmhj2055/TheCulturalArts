import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-wrapper',
  templateUrl: './product-wrapper.component.html',
  styleUrls: ['./product-wrapper.component.css']
})
export class ProductWrapperComponent implements OnInit {
  title: String;
  constructor() {
    this.title="Product";
  }

  ngOnInit(): void {
  }

}
