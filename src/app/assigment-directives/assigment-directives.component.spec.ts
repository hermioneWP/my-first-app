import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigmentDirectivesComponent } from './assigment-directives.component';

describe('AssigmentDirectivesComponent', () => {
  let component: AssigmentDirectivesComponent;
  let fixture: ComponentFixture<AssigmentDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigmentDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigmentDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
