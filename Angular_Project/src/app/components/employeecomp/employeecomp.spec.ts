import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeecomp } from './employeecomp';

describe('Employeecomp', () => {
  let component: Employeecomp;
  let fixture: ComponentFixture<Employeecomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeecomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeecomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
