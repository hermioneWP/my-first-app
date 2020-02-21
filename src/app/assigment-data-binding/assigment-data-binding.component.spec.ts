import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigmentDataBindingComponent } from './assigment-data-binding.component';

describe('AssigmentDataBindingComponent', () => {
  let component: AssigmentDataBindingComponent;
  let fixture: ComponentFixture<AssigmentDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigmentDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigmentDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
