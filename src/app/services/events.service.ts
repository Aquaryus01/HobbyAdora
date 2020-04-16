import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Events } from '../models/events';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public events = new Subject<Events[]>();
  private currentDate: Date;

  constructor(private http: HttpClient,
              private auth: AuthService) { }


  public getTodayEvents(): Observable<Events[]>{
    this.currentDate = new Date();
    const url = `${environment.apiUrl}api/event`;

    let params = new HttpParams().set("date",this.currentDate.toString());

    return this.http.get<Events[]>(url, {params: params});
  }

  public addEvent(name, image){
    const url = `${environment.apiUrl}api/skill`;
    var token = this.auth.getToken();

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${token}`,);
    
    var obj = {
      "skill" : {
        "name": name,
        "image": image
      }
    }
    this.http.post(url, JSON.stringify(obj), {headers}).subscribe(res => 
      console.log(res));
  }

  public eventsFinder(event: string){
    const url = `${environment.apiUrl}api/event/search`;
    let params = !!event ? new HttpParams().set("search",event) : null
  
    this.http.get<Events[]>(url, {params: params}).subscribe((res:Events[]) => {
        this.events.next(res)
    })
  }

  
  
  public getEvents(): Observable<Events[]>{
    const url = `${environment.apiUrl}api/event`;
    return this.http.get<Events[]>(url);
  }
}
