import { Component, OnInit,Output, Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.css']
})
export class BinComponent implements OnInit {
  globalChange:boolean = false;
  Value:string;
  @Input() Count:string;
  @Output() CountChange: EventEmitter<string> = new EventEmitter<string>();
  ngDoCheck(){
    this.globalChange = true;
    if(this.Count!=this.Value){
      this.Value = this.Count;
    }
  }
  ClickModel()
  {
    this.globalChange=false;
  }
  ModelChange(){
   
    
    this.CountChange.emit(this.Value);

}
  constructor() { }

  ngOnInit() {
  }


}
