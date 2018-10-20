import { Component, OnInit, Output, Input, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.css']
})
export class BinComponent implements OnInit , DoCheck {
  // tslint:disable:no-inferrable-types
  globalChange: boolean = false;
  Value: string;
  Validate: boolean = true;

  @Input() Count: string;
  @Output() CountChange: EventEmitter<string> = new EventEmitter<string>();
  ngDoCheck() {
    this.globalChange = true;
    if (this.Count !== this.Value) {
      this.Value = this.Count;
    }
  }
  ClickModel() {
    this.globalChange = false;
  }

  ValidateNumber(numberString: string): boolean {
    const reg =  /^[0-1]*\.?[0-1]*$/;
    return reg.test(numberString);
  }
  ModelChange() {

    this.Validate = this.ValidateNumber(this.Value);
    if (this.Validate) {
    this.CountChange.emit(this.Value);
    }

}
  constructor() { }

  ngOnInit() {
  }


}
