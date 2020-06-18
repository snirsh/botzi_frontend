import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-volunteers',
  templateUrl: './display-volunteers.component.html',
  styleUrls: ['./display-volunteers.component.css']
})
export class DisplayVolunteersComponent implements OnInit {


  public task:any= "dogSitter";
  public volunteersList: any[] = [{
    "name": 'Michal',
    "email": 'micha@gmail.com',
    "phone": '0548445655'
},{
  "name": 'shir',
  "email": 'shir@gmail.com',
  "phone": '0584475562'
}
];

  constructor() { }

  ngOnInit() {
  }

}
