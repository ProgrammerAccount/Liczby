import { Component, OnInit ,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dec',
  templateUrl: './dec.component.html',
  styleUrls: ['./dec.component.css']
})
export class DecComponent implements OnInit {
  Value:number=0;
  globalChange:boolean = false;

  @Input() Count:string;
  @Output() CountChange: EventEmitter<string> = new EventEmitter<string>();
  ngDoCheck(){
    if(this.Count!=this.DecToBin(this.Value))    
    this.Value = this.BinToDec(this.Count);
  }
  ClickModel()
  {
    this.globalChange=false;
  }
  ModelChange(){
    this.CountChange.emit(this.DecToBin(this.Value));
  }
  BinToDec(Bin:string):number
  {
    
    var Dec = 0;
    for(let i =0; i < Bin.length ;i++)
    {
      if(Bin.charAt(i)=='1') Dec+= Math.pow(2,(Bin.length-1)-i);
      console.log(Bin.length-i);
    }
      return Dec;
  }
  DecToBin(Dec:number):string
  {
    var Bin='';
    while(Dec>1)
    {
      Bin = (Math.floor(Dec%2)).toString()+Bin;
      Dec=Dec/2;
    }
    while(Bin.charAt(0)==='0')
      Bin=Bin.substr(1);
    return Bin;
  }
  constructor() { }

  ngOnInit() {
  }

}