import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{

   hotelName:string="hilton hotel";
   numberroom:number=20;
  ngOnInit(): void {

  }

}
