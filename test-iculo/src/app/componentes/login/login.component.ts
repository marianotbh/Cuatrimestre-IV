import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: [],
    showTitle: true,
    title: 'Ciudades y Latitud',
    useBom: false,
    removeNewLines: true,
    keys: ['Ciudad', 'Latitud']
  };

  datos = [
    { "Ciudad": "Az Ziyārah", "Latitud": 35.6907846 },
    { "Ciudad": "Whitehorse", "Latitud": 60.7610412 },
    { "Ciudad": "Kholmsk", "Latitud": 47.042758 },
    { "Ciudad": "Oslo", "Latitud": 59.9112915 },
    { "Ciudad": "Nkandla", "Latitud": -28.5860306 },
    { "Ciudad": "Rudniki", "Latitud": 51.035673 },
    { "Ciudad": "Yingchuan", "Latitud": 38.487193 },
    { "Ciudad": "Aigínio", "Latitud": 40.4989376 },
    { "Ciudad": "Ribas", "Latitud": 41.5157473 },
    { "Ciudad": "Lianhua", "Latitud": 27.127669 },
    { "Ciudad": "Alençon", "Latitud": 48.4339701 },
    { "Ciudad": "Tsalgar", "Latitud": 49.7243301 },
    { "Ciudad": "Seremban", "Latitud": 2.7239834 },
    { "Ciudad": "Patabog", "Latitud": 13.5128321 },
    { "Ciudad": "Zongluzui", "Latitud": 30.699439 },
    { "Ciudad": "Taiping", "Latitud": 53.3004898 },
    { "Ciudad": "Göteborg", "Latitud": 57.6817979 },
    { "Ciudad": "Paris 15", "Latitud": 48.8466523 },
    { "Ciudad": "Chon Buri", "Latitud": 13.3600554 },
    { "Ciudad": "Kertasari", "Latitud": -7.2760371 },
    { "Ciudad": "Myrnyy", "Latitud": 45.3081724 },
    { "Ciudad": "Termas de Río Hondo", "Latitud": -37.9867271 },
    { "Ciudad": "Tanagara", "Latitud": -6.2683218 },
    { "Ciudad": "Fyllingsdalen", "Latitud": 60.3573369 },
    { "Ciudad": "Szczurowa", "Latitud": 50.1069802 },
    { "Ciudad": "La Unión", "Latitud": 13.3323464 },
    { "Ciudad": "Huating", "Latitud": 35.218292 },
    { "Ciudad": "Chornomors’ke", "Latitud": 46.2952236 },
    { "Ciudad": "Palomoc", "Latitud": 7.2484596 },
    { "Ciudad": "Srbinovo", "Latitud": 41.7156359 },
    { "Ciudad": "Lunik", "Latitud": 41.2870015 },
    { "Ciudad": "Xiangshui", "Latitud": 34.199479 },
    { "Ciudad": "Seremban", "Latitud": 2.7239834 },
    { "Ciudad": "Jamundí", "Latitud": 3.1377116 },
    { "Ciudad": "Arroio Grande", "Latitud": -32.2331548 },
    { "Ciudad": "Béziers", "Latitud": 43.3362822 },
    { "Ciudad": "Thayetmyo", "Latitud": 19.3228423 },
    { "Ciudad": "Parajara", "Latitud": -10.5971 },
    { "Ciudad": "Payao", "Latitud": 7.5932558 },
    { "Ciudad": "Alvesta", "Latitud": 56.8984411 },
    { "Ciudad": "Cimanggu Wetan", "Latitud": -6.8128491 },
    { "Ciudad": "Butembo", "Latitud": 0.114047 },
    { "Ciudad": "Pimian", "Latitud": 22.330081 },
    { "Ciudad": "Enskede", "Latitud": 59.2848437 },
    { "Ciudad": "Cilimus Kulon", "Latitud": -6.8546403 },
    { "Ciudad": "Paiisa", "Latitud": 13.9289816 },
    { "Ciudad": "Tyresö", "Latitud": 59.2452899 },
    { "Ciudad": "Kachug", "Latitud": 53.9608024 },
    { "Ciudad": "Magepanda", "Latitud": -8.553113 },
    { "Ciudad": "Macapá", "Latitud": 0.0208039 },
    { "Ciudad": "Kompóti", "Latitud": 39.1020713 },
    { "Ciudad": "Želešice", "Latitud": 49.1168862 },
    { "Ciudad": "Göteborg", "Latitud": 57.7330292 }
  ];

  latitudes = this.datos.map(function (x) { return x.Latitud });
  ciudades = this.datos.map(function (x) {return x.Ciudad});

  Highcharts = Highcharts;
  chartConstructor = 'chart';
  chartOptions = { 
    series: [{ name: 'Latitud', data: this.latitudes }] 
  };
  chartCallback = function (chart) { };
  updateFlag = false;
  oneToOneFlag = true;
  runOutsideAngular = false;

  constructor() { }

  ngOnInit() {
    console.log(this.latitudes);
  } 
}
