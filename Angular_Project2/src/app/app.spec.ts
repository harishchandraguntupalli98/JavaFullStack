import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeAll(()=>{
    console.log('before All')
  })
  beforeEach(async () => {
    console.log('before each')
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });
  afterEach(()=>{
    console.log('after each')
  })
  afterAll(()=>{
    console.log('after All')
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Angular_Project2');
  });

  it('it should verify addition function',()=>{
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.addition(10,20)).toBe(30);
    expect(app.addition(10,-20)).toBe(-10);
    expect(app.addition(-10,-20)).toBe(-30);
    expect(app.addition(-10,20)).toBe(10);
  })
});
