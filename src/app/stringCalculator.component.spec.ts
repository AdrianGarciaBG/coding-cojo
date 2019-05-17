import { TestBed, async } from '@angular/core/testing';
import { StringCalculatorComponent } from './stringCalculator.component';

describe('StringCalculatorComponent', () => {
  let app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StringCalculatorComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(StringCalculatorComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('Should compile', () => {
    expect(app.Add('')).toEqual(0);
  });
  it('Should compile', () => {
    expect(app.Add('1')).toEqual(1);
  });
  it('Should compile', () => {
    expect(app.Add('1,2')).toEqual(3);
  });
  it('Should compile', () => {
    expect(app.Add('1,2,3')).toEqual(6);
  });
});
