import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  num: number;
  @Output() newNumber = new EventEmitter<number>();
  intervalId;

  constructor() {
    this.num = 0;
  }

  ngOnInit(): void {
  }

  start() {
    this.intervalId = setInterval(() => {
      this.num++;
      this.newNumber.emit(this.num);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.num = 0;
  }

}
