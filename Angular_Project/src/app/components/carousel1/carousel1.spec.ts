import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel1 } from './carousel1';

describe('Carousel1', () => {
  let component: Carousel1;
  let fixture: ComponentFixture<Carousel1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carousel1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carousel1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
