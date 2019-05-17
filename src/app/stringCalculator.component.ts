import { Component } from '@angular/core';

@Component({
  selector: 'app-string-calculator',
  templateUrl: './stringCalculator.component.html'
})
export class StringCalculatorComponent {

    constructor() {

    }

    Add(stringNumber: string): number {
      if(stringNumber === '') {
        return 0;
      }

      const numberSplitted = stringNumber.split(',');
      return numberSplitted.length > 1 ? 
              parseInt(numberSplitted[0]) + parseInt(numberSplitted[1]) 
            : parseInt(numberSplitted[0]);
    }


}
