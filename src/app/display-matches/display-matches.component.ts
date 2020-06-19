import { Campaign } from './../Capmaign';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-matches',
  templateUrl: './display-matches.component.html',
  styleUrls: ['./display-matches.component.css']
})
export class DisplayMatchesComponent implements OnInit {
  
  public campaignsList: any[] = [
    new Campaign("babysitting", 12345432, '02/08/2020'
    ,'12/08/2020', "Zfat", "you'd babyssit kids whom parents are hospitalized")
   , new Campaign("Medicine-Give-away", 123984322, '02/09/2020'
   ,'10/09/2020', "Jerusalem", "you'd giveAway Medicine to old people")
];
  constructor() { }

  ngOnInit() {
  }

}
