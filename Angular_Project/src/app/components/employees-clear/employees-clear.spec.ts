import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesClear } from './employees-clear';

describe('EmployeesClear', () => {
  let component: EmployeesClear;
  let fixture: ComponentFixture<EmployeesClear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesClear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesClear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
