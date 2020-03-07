import {CounterService} from './counter.service';
import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  @Output() passHappened = new EventEmitter<{ passActive: number, passInactive: number }>();

  constructor(private counterService: CounterService) {
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.activeToInactiveInc();
    this.emit();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.inactiveToActiveInc();
    this.emit();
  }

  getNumOfPassActive(): number {
    return this.counterService.inactiveToActive;
  }

  getNumOfPassInactive(): number {
    return this.counterService.activeToInactive;
  }

  emit() {
    this.passHappened.emit({passActive: this.getNumOfPassActive(), passInactive: this.getNumOfPassInactive()});
  }
}
