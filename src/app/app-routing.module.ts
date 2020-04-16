import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TestResolver} from './resolvers/test.resolver';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import { EventsResolverService } from './resolvers/events-resolver.service';
import { EventPageComponent } from './pages/event-page/event-page.component';


const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full',
        resolve: { events: EventsResolverService  }
    },
    {
        path: 'event/:id',
        component: EventPageComponent,
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginPageComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
