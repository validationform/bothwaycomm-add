import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() public parentD:any; 
  @Input('firstNumberP') firstNumberP:any;
  @Input('firstNumberP1') firstNumberP1:any;
  @Output() notify:EventEmitter<any> = new EventEmitter<any>();
  
  firstNumber : any;
  secondNumber : any;
  result : any;
  addNumber(){
      this.result = parseInt(this.firstNumberP) + parseInt(this.firstNumberP1);
      console.log(this.firstNumber);
      console.log(this.result);
      this.notify.emit(this.result)
     }
  constructor() { }
  ngOnInit(): void {
  }
}
