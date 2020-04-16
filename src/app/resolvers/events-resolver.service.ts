import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Events } from '../models/events';
import { Observable } from 'rxjs';
import { EventsService } from '../services/events.service';

@Injectable({
  providedIn: 'root'
})
export class EventsResolverService implements Resolve<Events[]> {
  constructor(private eventsService: EventsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Events[]>{
        return this.eventsService.getEvents();
    }
}
