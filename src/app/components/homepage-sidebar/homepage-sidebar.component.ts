import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'app-homepage-sidebar',
  templateUrl: './homepage-sidebar.component.html',
  styleUrls: ['./homepage-sidebar.component.scss']
})
export class HomepageSidebarComponent implements OnInit {

  events: Events[] = []
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getTodayEvents().subscribe(res => {
      this.events = res["events"]
    })
  }

}
