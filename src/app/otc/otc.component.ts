import { Component, OnInit , DoCheck , Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-otc',
  templateUrl: './otc.component.html',
  styleUrls: ['./otc.component.css']
})
export class OtcComponent implements OnInit, DoCheck {
  // tslint:disable:no-inferrable-types
  Validate: boolean = true;
  Value: string = '';
  globalChange: boolean = false;

  @Input() Number: string;
  @Output() NumberChange: EventEmitter<string> = new EventEmitter<string>();
  ngDoCheck() {
    if (this.Number !== this.OctToBin(this.Value)) {
    this.Value = this.BinToOct(this.Number);
    }
  }
  ValidateNumber(numberString: string): boolean {
    const reg =  /^[-+]?[0-7]*\.?[0-7]*$/;
    return reg.test(numberString);
  }
  ClickInput() {
    this.globalChange = false;
  }
  ModelChange() {
    this.Validate = this.ValidateNumber(this.Value);
    if (this.Validate) {
    this.NumberChange.emit(this.OctToBin(this.Value));
    }
  }
  BinToOct(Bin: string): string {
    let Oct = '';
    let BinValue;
    if (Bin !== undefined) {

    while (Bin.length % 3 !== 0) {
    Bin = '0' + Bin;
    }
    for (let i = 0; i < Bin.length; i += 3) {
      BinValue = Bin.charAt(i) + Bin.charAt(i + 1) + Bin.charAt(i + 2);
      switch (BinValue) {
        case '000': Oct += '0'; break;
        case '001': Oct += '1'; break;
        case '010': Oct += '2'; break;
        case '011': Oct += '3'; break;
        case '100': Oct += '4'; break;
        case '101': Oct += '5'; break;
        case '110': Oct += '6'; break;
        case '111': Oct += '7'; break;
      }
    }
    if (Oct.length > 1) {
      while (Oct.charAt(0) === '0') {
        Oct = Oct.substring(1, Oct.length);
        if (Oct.length === 1) { break; }
      }
      }
  }
    return Oct;
  }

  OctToBin(Oct: string): string {
    Oct = Oct.toUpperCase();

    let Bin = '';
    for (let i = 0; i < Oct.length; i++) {

      switch (Oct.charAt(i)) {
        case '0': Bin += '000'; break;
        case '1': Bin += '001'; break;
        case '2': Bin += '010'; break;
        case '3': Bin += '011'; break;
        case '4': Bin += '100'; break;
        case '5': Bin += '101'; break;
        case '6': Bin += '110'; break;
        case '7': Bin += '111'; break;
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
