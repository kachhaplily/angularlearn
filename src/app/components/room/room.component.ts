import { Component ,OnInit} from '@angular/core';
import { room, roomlist } from './room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{

   hotelName:string="hilton hotel";
   numberroom:number=20;
   hideroom=false;

   Room:room={
    totalroom:20,
    avl:12,
    bookedroom:5
   }

  Roomlist:roomlist[]=[
    {
      roomnumber:1,
    roomtype:"delux room",
    ameninites:"air conditioner,free wifi,breakfast",
    price:500,
    photos:"https://images.unsplash.com/photo-1679678690998-88c8711cbe5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    checkin: new Date ('05-04-2023'),
    checkout: new Date ('06-04-2034')

  },
  {
    roomnumber:2,

    roomtype:"delux room",
    ameninites:"air conditioner,free wifi,breakfast,free water",
    price:1200,
    photos:"https://images.unsplash.com/photo-1614649024145-7f847b1c803f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    checkin: new Date ('06-04-2023'),
    checkout: new Date ('08-04-2034')

  },
  {
    roomnumber:4,

    roomtype:"delux room private",
    ameninites:"air conditioner,free wifi,breakfast",
    price:500,
    photos:"https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    checkin: new Date ('05-04-2023'),
    checkout: new Date ('06-04-2034')

  },

]

   constructor(){}
  ngOnInit(): void {

  }
   toggle(){
    this.hideroom=!this.hideroom
   }

}
