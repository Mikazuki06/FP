import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.page.html',
  styleUrls: ['./detailproduct.page.scss'],
})
export class DetailproductPage implements OnInit {
  count = 0;
  
  constructor() { }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  ngOnInit() {
  }

}
