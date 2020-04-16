import { Component, OnInit } from '@angular/core';
import '../../../../jitsi/external_api.js'
import { Route } from '@angular/compiler/src/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthService } from 'src/app/services/auth.service.js';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  constructor(route: ActivatedRoute, private auth: AuthService) {
    this.id = route.snapshot.params.id;
  }

  id: string
  ngOnInit(): void {
    var domain="meet.jit.si"
    var options = {
      roomName: "hobbyAdora" + this.id,
      parentNode: document.querySelector('#meet'),
      jwt: this.auth.getToken(),
      configOverwrite: { disableThirdPartyRequests: false }
    }

    const api = new JitsiMeetExternalAPI(domain, options);
    api.executeCommand('password', 'secret99bro');
  }

}
