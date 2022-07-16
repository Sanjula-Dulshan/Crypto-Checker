import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
})
export class CoinListComponent implements OnInit {
  bannerData: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getBannerData();
    this.getAllData();
  }

  //get Trending Currency
  getBannerData() {
    return this.api.getTrendingCurrency('lkr').subscribe((res) => {
      console.log(res);
      this.bannerData = res;
    });
  }

  //get all currency
  getAllData() {
    return this.api.getCurrency('lkr').subscribe((res) => {
      console.log(res);
    });
  }
}
