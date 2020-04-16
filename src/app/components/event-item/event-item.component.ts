import { Component, OnInit, Input } from '@angular/core';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  constructor() { }

  @Input() event: Events;
  
  ngOnInit(): void {

  }

}
