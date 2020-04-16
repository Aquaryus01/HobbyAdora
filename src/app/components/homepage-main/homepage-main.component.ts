import {Component, OnInit} from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Events } from 'src/app/models/events';
import { EventsService } from 'src/app/services/events.service';
import { ToastsService } from 'src/app/services/toasts.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-homepage-main',
    templateUrl: './homepage-main.component.html',
    styleUrls: ['./homepage-main.component.scss']
})
export class HomepageMainComponent implements OnInit {

    events: Events[] = []
    authState;
    constructor(
        private activatedRoute: ActivatedRoute,
        private eventsService: EventsService,
        private toastsService: ToastsService,
        private authService: AuthService,
        private router: Router
         ) {
            this.authService.authStateChanged().subscribe(state => {
                console.log(state)
                this.authState = state;
            });
        }


    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data) => {
            console.log(data)
            this.events = data.events["events"];
        })

        this.eventsService.events.subscribe(res => {
            console.log("biness")
            this.events = res["events"];
        })
    }

    onClick(id){
        console.log(id)
        if(this.authService.getToken()){
            this.router.navigate(['event/' + id]);
        }else{
            this.toastsService.display('You must be logged in to join a channel');
        }
           
    }
}
