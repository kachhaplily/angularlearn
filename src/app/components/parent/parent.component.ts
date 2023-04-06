import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


  parentdata:string="i am parent"

  onchildevent(event:string){
    console.log(event)
    this.parentdata=event
  }

}
