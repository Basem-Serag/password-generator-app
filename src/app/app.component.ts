import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lenght: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymblos: boolean = false;
  generatedPassword: string = '';
  constructor() {}

  onLengthChange(value: string) {
    const parcedValue = parseInt(value);
    if (!isNaN(parcedValue)) {
      this.lenght = parcedValue;
    }
  }
  onLettersChange() {
    this.includeLetters = !this.includeLetters;
  }
  onNumbersChange() {
    this.includeNumbers = !this.includeNumbers;
  }
  onSymbolsChange() {
    this.includeSymblos = !this.includeSymblos;
  }

  onGenerate() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstwxyz';
    const symbols = '!@#$%^&*()_';

    let validValue = '';
    if (this.includeLetters) {
      validValue += letters;
    }
    if (this.includeNumbers) {
      validValue += numbers;
    }
    if (this.includeSymblos) {
      validValue += symbols;
    }

    let generatedValues = '';
    for (let i = 0; i < this.lenght; i++) {
      const index = Math.floor(Math.random() * validValue.length);
      generatedValues += validValue[index];
    }
    this.generatedPassword = generatedValues;
  }
}
