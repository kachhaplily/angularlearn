import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @Input() mydata:string="";
  @Output() childevent=new EventEmitter<string>();
  constructor(){}
  ngOnInit(): void {

  }
  change(){
    this.childevent.emit("hey i am child");
  }

}
