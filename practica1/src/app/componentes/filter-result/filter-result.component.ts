import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.css']
})
export class FilterResultComponent implements OnInit {

  @Input() marca:string;
  @Input() modelo:string;
  @Input() foto:string;
  @Input() puertas:number;
  @Input() show:boolean;

  constructor() { }

  ngOnInit() {
  }

}
