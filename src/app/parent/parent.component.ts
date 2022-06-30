import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @Input() public firstNumber:any;
  @Input() public secondNumber:any;
  
  
  childData:any;

  addNumber(data:any){
  this.childData=data;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
