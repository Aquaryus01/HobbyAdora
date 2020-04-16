import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private eventService: EventsService) { }
  searchWord: string = "";
  
  ngOnInit(): void {
  }

  searchEvent(){
    this.eventService.eventsFinder(this.searchWord);
  }
}
