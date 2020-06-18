import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {

  @Input() public volunteer:any;
  constructor() { }

  ngOnInit() {
  }

}
