import { Component, OnInit , Input, Output , EventEmitter, DoCheck} from '@angular/core';

@Component({
  selector: 'app-hex',
  templateUrl: './hex.component.html',
  styleUrls: ['./hex.component.css']
})
export class HexComponent implements DoCheck, OnInit {
  // tslint:disable:no-inferrable-types
  Value: string = '';
  globalChange = false;
  Validate: boolean = true;

  @Input() Number: string;
  @Output() NumberChange: EventEmitter<string> = new EventEmitter<string>();
  ngDoCheck() {
    if (this.Number !== this.HexToBin(this.Value)) {
    this.Value = this.BinToHex(this.Number);
    }
  }
  ClickInput() {
    this.globalChange = false;
  }
  ModelChange() {
    this.Validate = this.ValidateNumber(this.Value);
    if (this.Validate) {
    this.NumberChange.emit(this.HexToBin(this.Value));
    }
  }
  ValidateNumber(numberString: string): boolean {
    const reg = /^[0-9A-Fa-f]*\.?[0-9A-Fa-f]*$/;
    return reg.test(numberString);
  }
  BinToHex(Bin: string): string {
    let Hex = '';
    let BinValue;
    if (Bin !== undefined) {
    while (Bin.length % 4 !== 0) {
    Bin = '0' + Bin;
    }
    for (let i = 0; i < Bin.length; i += 4) {
      BinValue = Bin.charAt(i) + Bin.charAt(i + 1) + Bin.charAt(i + 2) + Bin.charAt(i + 3);
      switch (BinValue) {
        case '0000': Hex += '0'; break;
        case '0001': Hex += '1'; break;
        case '0010': Hex += '2'; break;
        case '0011': Hex += '3'; break;
        case '0100': Hex += '4'; break;
        case '0101': Hex += '5'; break;
        case '0110': Hex += '6'; break;
        case '0111': Hex += '7'; break;
        case '1000': Hex += '8'; break;
        case '1001': Hex += '9'; break;
        case '1010': Hex += 'A'; break;
        case '1011': Hex += 'B'; break;
        case '1100': Hex += 'C'; break;
        case '1101': Hex += 'D'; break;
        case '1110': Hex += 'E'; break;
        case '1111': Hex += 'F'; break;
      }
    }
    if (Hex.length > 1) {
      while (Hex.charAt(0) === '0') {
        Hex = Hex.substring(1, Hex.length);
        if (Hex.length === 1) { break; }
      }
      }

  }
    return Hex;
  }

  HexToBin(Hex: string): string {
    Hex = Hex.toUpperCase();
    let Bin = '';
    for (let i = 0; i < Hex.length; i++) {

      switch (Hex.charAt(i)) {
        case '0': Bin += '0000'; break;
        case '1': Bin += '0001'; break;
        case '2': Bin += '0010'; break;
        case '3': Bin += '0011'; break;
        case '4': Bin += '0100'; break;
        case '5': Bin += '0101'; break;
        case '6': Bin += '0110'; break;
        case '7': Bin += '0111'; break;
        case '8': Bin += '1000'; break;
        case '9': Bin += '1001'; break;
        case 'A': Bin += '1010'; break;
        case 'B': Bin += '1011'; break;
        case 'C': Bin += '1100'; break;
        case 'D': Bin += '1101'; break;
        case 'E': Bin += '1110'; break;
        case 'F': Bin += '1111'; break;
      }
    }
    if (Bin.length > 1) {
      while (Bin.charAt(0) == '0') {
        Bin = Bin.substring(1, Bin.length);
        if (Bin.length === 1) { break; }
      }
    }
    return Bin;
  }
  constructor() { }

  ngOnInit() {
  }

}
