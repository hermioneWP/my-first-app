import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assigment-data-binding',
  templateUrl: './assigment-data-binding.component.html',
  styleUrls: ['./assigment-data-binding.component.css']
})
export class AssigmentDataBindingComponent implements OnInit {
  username = '';
  disabled = true;

  constructor() {
  }

  ngOnInit(): void {
  }


  onChange() {
    if (this.username !== '') {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  reset() {
    this.username = '';
    this.disabled = true;
  }
}
