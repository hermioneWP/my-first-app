import {CounterService} from "./counter.service";
import {Injectable} from "@angular/core";

@Injectable()
export class UsersService{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService:CounterService){}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.activeToInactiveInc();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.inactiveToActiveInc();
  }

  getNumOfPassActive(){
    return this.counterService.inactiveToActive;
  }

  getNumOfPassInactive(){
    return this.counterService.activeToInactive;
  }
}
