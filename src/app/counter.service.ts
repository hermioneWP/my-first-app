import {Injectable} from "@angular/core";

@Injectable()
export class CounterService {
  activeToInactive : number = 0;
  inactiveToActive : number = 0;

  activeToInactiveInc(){
    this.activeToInactive++;
  }

  inactiveToActiveInc(){
    this.inactiveToActive++;
  }
}
