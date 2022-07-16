import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss'],
})
export class CoinDetailComponent implements OnInit {
  coinData: any;
  coinID: string;
  days: number = 1;
  Currency: string = 'LKR';

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val) => {
      this.coinID = val['id'];
    });
    this.getCoinData();
  }

  getCoinData() {
    this.api.getCurrencyById(this.coinID).subscribe((res) => {
      console.log(res);
      this.coinData = res;
    });
  }
}
