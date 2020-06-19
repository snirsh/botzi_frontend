import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-matches',
  templateUrl: './display-matches.component.html',
  styleUrls: ['./display-matches.component.css']
})
export class DisplayMatchesComponent implements OnInit {
 public userName:any= "Yair";
  public matchesList: any[] = [{
    "date": '02/08/2020',
    "topic": 'babysitting',
    "description": 'watch a child whos parents are hospitalized'
},{
  "date": '03/07/2020',
  "topic": 'dogsitter',
  "description": 'watch a dog whos owners are hospitalized'
}
];
  constructor() { }

  ngOnInit() {
  }

}
