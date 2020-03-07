import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inactiveUsers = [];
  activeUsers = [];
  passActive: number;
  passInactive: number;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.activeUsers = this.usersService.activeUsers;
    this.passActive = this.usersService.getNumOfPassActive();
    this.passInactive = this.usersService.getNumOfPassInactive();
    this.usersService.passHappened.subscribe(
      ({passActive, passInactive}) => {
        this.passActive = passActive;
        this.passInactive = passInactive;
      });
  }
}
