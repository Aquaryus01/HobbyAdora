import { Component, OnInit, Input } from '@angular/core';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  constructor() { }
  @Input() event: Events

  ngOnInit(): void {
  }
}
