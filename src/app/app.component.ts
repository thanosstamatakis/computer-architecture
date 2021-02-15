import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Pipelining calculator';

  name: string =
    'E1 MUL1 R13,R14,R1 E2 MUL2 R13,R14,R1 E3 MUL3 R13,R14,R1 E4 MUL4 R13,R14,R1 E5 MUL5 R13,R14,R1 E6 MUL6 R13,R14,R1 E7 MUL7 R13,R14,R1 E8 MUL8 R13,R14,R1 E9 MUL9 R13,R14,R1';
  letter: string = 'E';
  ends: string = '';
  commands = [];
  wraps = 1;

  setValue() {
    this.name = 'Nancy';
  }

  testRegex() {
    // /^Mary/;
    let regx;
    if (this.wraps == 1) {
      regx = `${this.letter}[0-9]+`;
    }
    if (this.wraps == 2) {
      regx = `\[${this.letter}[0-9]+\]`;
    }
    if (this.wraps == 3) {
      regx = `\(${this.letter}[0-9]+\)`;
    }
    if (this.wraps == 4) {
      regx = `\{${this.letter}[0-9]+\}`;
    }

    // const re = `${this.letter}${this.ends}`;
    const regex = new RegExp(regx);
    this.commands = this.name.split(regex).filter((c) => c !== '');
    return regex.test(this.name);
  }

  ngOnInit(): void {}
}
