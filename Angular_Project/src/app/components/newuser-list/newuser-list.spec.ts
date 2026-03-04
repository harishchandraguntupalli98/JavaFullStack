import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserList } from './newuser-list';

describe('NewuserList', () => {
  let component: NewuserList;
  let fixture: ComponentFixture<NewuserList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewuserList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewuserList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
