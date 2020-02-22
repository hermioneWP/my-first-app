import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assigment-directives',
  templateUrl: './assigment-directives.component.html',
  styleUrls: ['./assigment-directives.component.css']
})
export class AssigmentDirectivesComponent implements OnInit {
  display = false;
  clicks = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.display = !this.display;
    this.clicks.push(new Date());
  }

}
