import { Component, OnInit, DoCheck , Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dec',
  templateUrl: './dec.component.html',
  styleUrls: ['./dec.component.css']
})
export class DecComponent implements OnInit, DoCheck {
  // tslint:disable:no-inferrable-types
  Value: number ;
  globalChange: boolean = false;
  Validate: boolean = true;

  @Input() Count: string;
  @Output() CountChange: EventEmitter<string> = new EventEmitter<string>();
  ngDoCheck() {
    if (this.Count !== this.DecToBin(this.Value)) {
    this.Value = this.BinToDec(this.Count);
    }
  }
  ClickModel() {
    this.globalChange = false;
  }
  ModelChange() {
    this.Validate = this.ValidateNumber(this.Value.toString());
    if (this.Validate) {
    this.CountChange.emit(this.DecToBin( this.Value ));
    }
  }
  ValidateNumber(numberString: string): boolean {
    const reg =  /^\d+$/;
    return reg.test(numberString);
  }
  BinToDec(Bin: string): number {
    let Dec = 0;
    if (Bin !== undefined) {
    for (let i = 0; i < Bin.length ; i++) {
      if (Bin.charAt(i) === '1') { Dec += Math.pow(2, (Bin.length - 1) - i); }
    }
  }
      return Dec;
  }
  DecToBin(Dec: number): string {

    let Bin = '';
    while (Dec >= 1) {
      Bin = (Math.floor(Dec % 2)).toString() + Bin;
      Dec = Dec / 2;
    }
    while (Bin.charAt(0) === '0') {
      Bin = Bin.substr(1);
    }


    return Bin;

  }
  constructor() { }

  ngOnInit() {
  }

}
