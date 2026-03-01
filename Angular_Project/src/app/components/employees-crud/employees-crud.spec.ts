import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCrud } from './employees-crud';

describe('EmployeesCrud', () => {
  let component: EmployeesCrud;
  let fixture: ComponentFixture<EmployeesCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
