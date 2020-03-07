import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  activeToInactiveInc() {
    this.activeToInactive++;
    return this.activeToInactive;
  }

  inactiveToActiveInc() {
    this.inactiveToActive++;
    return this.inactiveToActive;
  }
}
