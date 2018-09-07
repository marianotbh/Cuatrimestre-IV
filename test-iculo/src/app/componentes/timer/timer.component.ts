import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  start() {
    while(true) {
      this.count++;
      this.countChange.emit(this.count);
    }
  }
}
