import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDriverForm } from './model-driver-form';

describe('ModelDriverForm', () => {
  let component: ModelDriverForm;
  let fixture: ComponentFixture<ModelDriverForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDriverForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDriverForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
